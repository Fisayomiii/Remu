import React from 'react';
import demo from "../assets/demo.png";
import remu from "../assets/remu.png";
import { NavLink } from 'react-router-dom';

function Login() {
    return (
        <>
            <form>
                <div className="mt-4 space-y-4">
                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-100">
                            Email
                        </label>
                        <input type='email'
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-lg placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="email@example.com"
                            name="email"
                        />
                    </div>
                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-100">
                            Password
                        </label>
                        <input
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-lg placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="6 or more characters"
                            autoComplete="off"
                            type="password"
                        />
                        <p className='mt-2 text-sm text-gray-400'>Use 6 or more characters with a mix of letters, numbers & symbols</p>
                    </div>
                    <div className="col-span-full">
                        <button
                            className="items-center justify-center px-24 py-2.5 text-center text-white duration-200 bg-[#FE2C55] border-2 border-[#FE2C55] rounded-xl inline-flex hover:bg-transparent hover:border-[#FE2C55] hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white"
                            type="submit"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login