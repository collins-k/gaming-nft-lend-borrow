import React, { useEffect, useState } from 'react'
import {
    LinkResults,
    ImmutableXClient,
    ImmutableMethodResults,
} from '@imtbl/imx-sdk'
import { debugValue } from '../utils/logger'

type IMXProviderProps = {
    children: React.ReactNode // 👈️ type children
}

interface IMXState {
    wallet: string
    balance: undefined | ImmutableMethodResults.ImmutableGetBalanceResult
    client: undefined | ImmutableXClient
    link: undefined | LinkResults.Setup
    setIMXLink: undefined | ((link: LinkResults.Setup) => void)
}

const defaultState: IMXState = {
    wallet: '',
    balance: undefined,
    client: undefined,
    link: undefined,
    setIMXLink: undefined,
}

const IMXProvider = ({ children }: IMXProviderProps) => {
    const [wallet, setWallet] = useState(defaultState.wallet)
    const [balance, setBalance] = useState<
        ImmutableMethodResults.ImmutableGetBalanceResult | undefined
    >(defaultState.balance)
    const [client] = useState<ImmutableXClient | undefined>(defaultState.client)
    const [link, setLink] = useState<LinkResults.Setup | undefined>(
        defaultState.link
    )

    const setIMXLink = (link: LinkResults.Setup) => {
        console.log('calle setIMXLink with ', link)
        setLink(link)
    }
    defaultState.setIMXLink = setIMXLink

    useEffect(() => {
        if (link) {
            ;async () => {
                setWallet(link.address)
            }
        }
    }, [link])

    useEffect(() => {
        debugValue(`wallet in context has changed to ${wallet}`)
    }, [wallet])

    return (
        <IMXContext.Provider
            value={{ balance, client, wallet, setIMXLink, link }}
        >
            {children}
        </IMXContext.Provider>
    )
}
export const IMXContext = React.createContext(defaultState)

export { IMXProvider }
