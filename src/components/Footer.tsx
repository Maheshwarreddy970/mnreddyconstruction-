import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full rounded-t-3xl bg-black pt-10 pb-16 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10 lg:flex-row justify-between">
                <div className="block xl:py-16 ">
                <div className="flex items-center gap-2">
                        <img src="/Picsart_24-12-10_11-35-05-391.png" className="w-16 h-16 font-semibold" alt="Logo" />
                    <p className=' font-bold  text-2xl'>MNReddy</p>
                    </div>
                </div>

                <div className="block text-center xl:text-left xl:py-16  xl:pl-5">
                    <h4 className="text-lg  font-bold mb-9">Get In Touch</h4>
                    <ul className=" transition-all duration-500 grid gap-6">
                        <a href="mailto:mnreddygroup@gmail.com">
                            <li>mnreddygroup@gmail.com</li>
                        </a>
                        <li>+91 7075007716</li>
                        <li>+91 6302786500</li>
                        <li>Shamshabad,Hyderabad, India.</li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}
