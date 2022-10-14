import { AlchemyProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import { ImLogger, WinstonLogger } from '@imtbl/imlogging'
import { ImmutableXClient, MintableERC721TokenType } from '@imtbl/imx-sdk'

import env from './config/client'
import { loggerConfig } from './config/logging'
import { debugValue } from './logger'

const provider = new AlchemyProvider('goerli', env.alchemyApiKey)
const log: ImLogger = new WinstonLogger(loggerConfig)
const component = 'imx-bulk-mint-script'

const waitForTransaction = async (promise: Promise<string>) => {
    const txId = await promise
    log.info(component, 'Waiting for transaction', {
        txId,
        etherscanLink: `https://goerli.etherscan.io/tx/${txId}`,
        alchemyLink: `https://dashboard.alchemyapi.io/mempool/eth-goerli/tx/${txId}`,
    })
    const receipt = await provider.waitForTransaction(txId)
    if (receipt.status === 0) {
        throw new Error('Transaction rejected')
    }
    log.info(component, 'Transaction Mined: ' + receipt.blockNumber)
    return receipt
}

export const mintToken = async () => {
    const mintToWallet = '0x....' // eth wallet public address which will receive the token
    const signer = new Wallet(process.env.PRIVATE_KEY!).connect(provider)

    const minter = await ImmutableXClient.build({
        publicApiUrl:
            process.env.NEXT_PUBLIC_IMX_API_URL ||
            'https://api.sandbox.x.immutable.com/v1 ', // https://api.sandbox.x.immutable.com/v1 for goerli, https://api.x.immutable.com/v1 for mainnet
        signer: signer,
        starkContractAddress: '0x7917eDb51ecD6CdB3F9854c3cc593F33de10c623', // 0x7917eDb51ecD6CdB3F9854c3cc593F33de10c623 for goerli, 0x5FDCCA53617f4d2b9134B29090C87D01058e27e9 for mainnet
        registrationContractAddress:
            '0x1C97Ada273C9A52253f463042f29117090Cd7D83', // 0x1C97Ada273C9A52253f463042f29117090Cd7D83 for goerli, 0x72a06bf2a1CE5e39cBA06c0CAb824960B587d64c for mainnet
        gasLimit: process.env.GAS_LIMIT,
        gasPrice: process.env.GAS_PRICE,
    })

    log.info(component, 'MINTER REGISTRATION')
    const registerImxResult = await minter.registerImx({
        etherKey: minter.address.toLowerCase(),
        starkPublicKey: minter.starkPublicKey,
    })

    if (registerImxResult.tx_hash === '') {
        log.info(component, 'Minter registered, continuing...')
    } else {
        log.info(component, 'Waiting for minter registration...')
        await waitForTransaction(Promise.resolve(registerImxResult.tx_hash))
    }

    const result = await minter.mint({
        mints: [
            {
                etherKey: mintToWallet.toLowerCase(),
                tokens: [
                    {
                        type: MintableERC721TokenType.MINTABLE_ERC721,
                        data: {
                            tokenAddress: env.tokenAddress, // address of token
                            id: '123', // must be a unique uint256 as a string
                            blueprint: 'metadata', // metadata can be anything but your L1 contract must parse it on withdrawal from the blueprint format '{tokenId}:{metadata}'
                        },
                    },
                ],
                nonce: '1',
                authSignature: '', // Leave empty
            },
        ],
    })

    debugValue('MintToken Result: ', result)
}
