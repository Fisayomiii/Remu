import React from 'react';
import logo from "../assets/remu.png";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            <div className="fixed top-0 z-10 w-full mx-auto 2xl:max-w-7xl">
                <div className="relative flex flex-col w-full p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-36">

                    <div className="flex flex-row items-center justify-between lg:justify-start">
                        <a className="flex items-center gap-1 text-lg tracking-tight text-white focus:outline-none focus:ring lg:text-2xl" href="/">
                            <img src={logo} className="object-cover w-8 h-8 rounded-full" alt="" />
                            <span className="lg:text-sm focus:ring-0">
                                Remu
                            </span>
                        </a>
                        <button className="inline-flex items-center justify-center p-2 text-gray-100 focus:outline-none focus:text-black md:hidden" onClick={toggleNavbar}>
                            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path className="inline-flex" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                <path className="hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <nav className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
                        <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                            <div className="relative flex-shrink-0 ml-5">
                                <NavLink to="/welcome" className="block px-9 py-4 mb-3 leading-loose text-[#fff] text-xs text-center font-semibold leading-none border-0 ring-2 ring-inset ring-[#fff] active:bg-[#fff] focus:outline-none focus:ring focus:ring-[#fff] transition duration-200 transition ease-in-out delay-150  duration-300 rounded-full">
                                    Log in
                                </NavLink>
                            </div>
                            <NavLink to="/welcome" className="block px-9 py-3 mb-2 leading-loose text-[#000] text-xs text-center font-semibold bg-[#fff] hover:bg-[#fff] active:bg-[#fff] focus:outline-none focus:ring focus:ring-[#fff] font-bold rounded-full transition duration-200 transition ease-in-out delay-150  duration-300">
                                Sign up
                            </NavLink>
                        </div>
                    </nav>

                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-20 overflow-y-auto backdrop-blur px-6 py-6 lg:hidden">
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <div className="fixed top-4 right-4 w-33 max-w-xs bg-white rounded-lg shadow-lg p-9 text-base font-semibold text-slate-900 ">
                                    <button type="button" className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" onClick={toggleNavbar}>
                                        <div className="flex">
                                            <span>X</span>
                                        </div>
                                    </button>
                                    <ul className="space-y-6 mt-10">
                                        <li >
                                            <NavLink to="/welcome" className="block px-9 py-4 mb-3 leading-loose text-[#000] text-xs text-center font-semibold leading-none border-0 ring-2 ring-inset ring-[#000] active:bg-[#000] focus:outline-none focus:ring focus:ring-[#fff] transition duration-200 transition ease-in-out delay-150  duration-300 rounded-full">
                                                Log in
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/welcome" className="block px-9 py-3 mb-2 leading-loose text-[#fff] text-xs text-center font-semibold bg-[#000] hover:bg-[#000] active:bg-[#000] focus:outline-none focus:ring focus:ring-[#fff] font-bold rounded-full transition duration-200 transition ease-in-out delay-150  duration-300">
                                                Sign up
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default Header;