import * as React from 'react'
import { useState } from 'react'

import Sidebar from '../../general-components/Sidebar'
import { AppFooter } from './AppFooter'
import { AppHeader } from './AppHeader'
import { ToastContainer } from 'react-toastify'

type BaseLayoutProps = {
    children: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => {
    // ---------------------------------------- variables

    const [sidebarOpen, setSidebarOpen] = useState(false)

    // UI
    return (
        <>
            <AppHeader />
            <div>{children}</div>
            <ToastContainer />
        </>
    )
}

export { BaseLayout }
