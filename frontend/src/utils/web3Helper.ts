import * as encUtils from 'enc-utils'
import { keccak256, toUtf8Bytes } from 'ethers/lib/utils'

export const createMintSignature = (mintBodyPayload: any) => {
    const hash = keccak256(toUtf8Bytes(JSON.stringify(mintBodyPayload)))
    const sig = deserializeSignature(await this.signer.signMessage(hash))
    return encUtils.addHexPrefix(
        encUtils.padLeft(sig.r.toString(16), 64) +
            encUtils.padLeft(sig.s.toString(16), 64) +
            encUtils.padLeft(sig.recoveryParam?.toString(16) || '', 2)
    )
}
