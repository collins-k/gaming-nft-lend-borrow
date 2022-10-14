import React, { useState, useRef, useEffect, useContext } from 'react'

import { Transition } from '@headlessui/react'
import { Link } from '@imtbl/imx-sdk'
import { getFromStorage, setToStorage } from '../utils/localStorage'
import { IMXContext } from '../contexts/imxContext'

function DropdownProfile(): JSX.Element {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const { setIMXLink } = useContext(IMXContext)

    const [address, setAddress] = useState(getFromStorage('WALLET_ADDRESS'))

    const trigger = useRef(null)
    const dropdown = useRef(null)
    let link = new Link(
        process.env.NEXT_PUBLIC_IMX_LINK_URL ??
            'https://link.sandbox.x.immutable.com'
    )

    const registerUserOnIMX = async (): Promise<void> => {
        const linkSetup = await link.setup({})
        setIMXLink(linkSetup)
        setToStorage('WALLET_ADDRESS', linkSetup.address)
        setToStorage('STARK_PUBLIC_KEY', linkSetup.starkPublicKey)
        setAddress(linkSetup.address)
    }

    const disconnect = () => {
        window.localStorage.removeItem('WALLET_ADDRESS')
    }

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: any) => {
            if (!dropdown.current) return
            if (
                !dropdownOpen ||
                (dropdown.current &&
                    (dropdown.current as any).contains(target)) ||
                (trigger.current && (trigger.current as any).contains(target))
            )
                return
            setDropdownOpen(false)
        }
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: any) => {
            if (!dropdownOpen || keyCode !== 27) return
            setDropdownOpen(false)
        }
        document.addEventListener('keydown', keyHandler)
        return () => document.removeEventListener('keydown', keyHandler)
    })

    return (
        <>
            {address ? (
                <div className="relative inline-flex">
                    <button
                        ref={trigger}
                        className="inline-flex justify-center items-center group"
                        aria-haspopup="true"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        aria-expanded={dropdownOpen}
                    >
                        <div className="flex items-center truncate">
                            <span className="truncate ml-2 font-bold text-sm md:text-md text-white font-medium group-hover:text-[#AD63F5]">
                                Connected to{' '}
                                {address?.substring(0, 10).concat('...')}
                            </span>

                            <svg
                                className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                                viewBox="0 0 12 12"
                            >
                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                        </div>
                    </button>

                    <Transition
                        className={`origin-top-right z-10 absolute top-full min-w-44 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${'right-0'}`}
                        appear={true}
                        show={dropdownOpen}
                        enter="transition ease-out duration-200 transform"
                        leave="transition ease-out duration-200"
                    >
                        <div
                            ref={dropdown}
                            onFocus={() => setDropdownOpen(true)}
                            onBlur={() => setDropdownOpen(false)}
                        >
                            <ul>
                                <li
                                    onClick={() => disconnect()}
                                    className="font-medium text-lg text-white hover:font-bold cursor-pointer flex items-center py-1 px-3"
                                >
                                    Sign Out
                                </li>
                            </ul>
                        </div>
                    </Transition>
                </div>
            ) : (
                <>
                    <div className="header-right d-flex align-items-center">
                        <ul className="header-right-inner">
                            <span
                                onClick={() => {
                                    registerUserOnIMX()
                                }}
                            >
                                <i className="ri-wallet-3-line"></i>
                                Connect
                            </span>
                        </ul>
                    </div>
                </>
            )}
        </>
    )
}

export default DropdownProfile
