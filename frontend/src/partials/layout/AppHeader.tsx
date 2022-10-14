import React, { useContext, Fragment } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { AppContext } from '../../contexts/appContext'
import DropdownProfile from '../../components/DropdownProfile'

export interface AppHeaderProps {
    sidebarOpen: boolean
    setSidebarOpen: (openFlag: boolean) => void
}

function AppHeader() {
    const router = useRouter()
    const appContext = useContext(AppContext)

    function isRouteActive(path: string): boolean {
        if (!router) return false
        return router.pathname === path || router.pathname.includes(path)
    }

    return (
        <header className="ib-header header-default header-fixed header--sticky fluid-header">
            <div className="header-inner d-flex align-items-center justify-content-between">
                <div className="header-left d-flex align-items-center">
                    <div className="logo-wrapper">
                        <a href="index.html" className="logo logo-light">
                            <img src="./images/logo-white.png" alt="brand" />{' '}
                        </a>
                        <a href="index.html" className="logo logo-dark">
                            <img src="./images/logo-dark.png" alt="brand" />{' '}
                        </a>
                    </div>

                    <div className="mainmenu-wrapper">
                        <nav
                            id="sideNav"
                            className="mainmenu-nav d-none d-xl-block"
                        >
                            <ul className="mainmenu">
                                <li className="has-dropdown has-menu-child-item">
                                    <a href="#">Explore</a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="explore-filter.html">
                                                Explore Filter
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <DropdownProfile />
            </div>
        </header>
    )
}

export { AppHeader }
