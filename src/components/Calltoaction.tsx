import React from 'react'

export default function Calltoaction() {
    return (
        <div className="relative overflow-hidden border-b w-full dark:border-gray-700 dark:bg-gray-900">

            <div className=" py-8 sm:px-6 sm:py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className=" text-lg text-wrap lg:text-2xl font-semibold tracking-tight text-center text-black sm:text-4xl dark:text-white">
                        Have any upcoming project?
                    </h2>
                    <p
                        className="max-w-xl mx-auto mt-3 text-gray-700 sm:mt-6 text-wrap text-sm sm:text-lg sm:leading-snug dark:text-gray-300">
                        Explore how MNReddy Construction can turn your vision into reality with our expertise and dedication to excellence.
                    </p>
                    <div className="flex items-center justify-center mt-6 sm:mt-10 gap-x-6">
                        <a className="flex flex-row items-center justify-center min-w-[130px] rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-2 h-[45px] hover:text-gray-200 dark:bg-white dark:text-black dark:hover:text-gray-700 px-8"
                            href="mailto:mnreddygroup@gmail.com" >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
            <svg viewBox="0 0 1024 1024"
                className="absolute left-1/2 z-10 top-[50%]  h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7">
                </circle>
                <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                        <stop stopColor="#3b82f6"></stop>
                        <stop offset="1" stopColor="#1d4ed8"></stop>
                    </radialGradient>
                </defs>
            </svg>
        </div>
    )
}
