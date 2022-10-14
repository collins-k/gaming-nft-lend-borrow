import { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css'

import '../styles/global.css'
import { NextIntlProvider } from 'next-intl'
import {
    WagmiConfig,
    createClient,
    configureChains,
    defaultChains,
} from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import {
    getDefaultWallets,
    RainbowKitProvider,
    darkTheme,
} from '@rainbow-me/rainbowkit'
import { ThemeProvider } from 'next-themes'

import { AppProvider } from '../contexts'
import { BaseLayout } from '../partials/layout/BaseLayout'
import Head from 'next/head'
import { store } from '../redux/store'

import '../index.scss'
import 'react-responsive-modal/styles.css'
import { Provider } from 'react-redux'
import { IMXProvider } from '../contexts/imxContext'

if (typeof window !== 'undefined') {
    require('bootstrap/dist/js/bootstrap')
}

const MyApp = ({ Component, pageProps }: AppProps) => {
    const { provider, chains, webSocketProvider } = configureChains(
        defaultChains,
        [publicProvider()]
    )
    const { connectors } = getDefaultWallets({
        appName: 'NewDevsOnTheBlock App',
        chains,
    })
    const client = createClient({
        provider,
        connectors,
        webSocketProvider,
        autoConnect: true,
    })
    return (
        <>
            <Head>
                <link rel="stylesheet" href="assets/css/style.css" />
            </Head>

            <NextIntlProvider messages={pageProps.messages}>
                <AppProvider>
                    <ThemeProvider defaultTheme="dark">
                        <Provider store={store}>
                            <IMXProvider>
                                <BaseLayout>
                                    <Component {...pageProps} />
                                </BaseLayout>
                            </IMXProvider>
                        </Provider>
                    </ThemeProvider>
                </AppProvider>
            </NextIntlProvider>
        </>
    )
}

export default MyApp
