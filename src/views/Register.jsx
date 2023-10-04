import React, { useState } from 'react';
import demo from "../assets/demo.png";
import remu from "../assets/remu.png";
import "../styles/sign.css"
import Signup from '../landingcomponents/Signup';
import Login from '../landingcomponents/Login';
import { NavLink } from 'react-router-dom';

function Register() {
    const [loginMode, setLoginMode] = useState(true);

    const toggleMode = () => {
        setLoginMode(!loginMode);
    };

    return (
        <>
            <div className="full overflow-auto lg:overflow-hidden max-h-screen py-24 sm:py-1">
                <div className="mx-auto max-w-1xl px-2 lg:px-0">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                        <div className="relative z-10 flex flex-col flex-1 mt-[-30px] px-4 py-10 lg:py-2 md:flex-none md:px-0 sm:justify-center">
                            <div className="w-full max-w-md mx-auto mr-42 md:max-w-sm md:px-0 md:w-96 sm:px-4">
                                <div className="flex flex-col">
                                    <div>
                                        <NavLink to="/">
                                        <img src={remu} className="mb-5 h-10 w-10 rounded-full" alt="logo" />

                                        </NavLink>
                                        <h2 className="text-3xl text-white">{loginMode ? "Let's get started!" : "Welcome Back!"}</h2>
                                        <p className="mt-2 text-sm text-gray-300">
                                            Already have an account?
                                            <span className='text-gray-400 underline cursor-pointer' onClick={toggleMode}>
                                                {loginMode ? " Log in" : " Sign up"}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                {loginMode ? <Signup /> : <Login />}
                            </div>
                        </div>

                        <div className="relative top-60 left-[10%] bg-[#212121] ">
                            <img src={demo} alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 hidden lg:block sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Register