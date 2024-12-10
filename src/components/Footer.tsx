import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10 lg:flex-row justify-between">
                <div className="block text-center xl:text-left xl:py-16  xl:pl-5">
                    <h4 className="text-lg  font-bold mb-9">Get In Touch</h4>
                    <ul className=" transition-all duration-500 grid gap-6">
                        <a href="mailto:mnreddygroup@gmail.com">
                        <li>mnreddygroup@gmail.com</li>
                        </a>
                        <li>+91 7075007716</li>
                        <li>+91 6302786500</li>
                        <li>Shadshabad,Hyderabad, India.</li>
                    </ul>
                </div>
                <div className="block xl:py-16 ">
                    <h4 className="text-lg  font-bold mb-9 text-center xl:text-left">Quick Links</h4>
                    <div className="flex gap-6 xl:gap-12 max-xl:justify-center">
                        <ul className=" transition-all duration-500 grid gap-6">
                            <li><a href="javascript:;">Home</a></li>
                            <li><a href="javascript:;">FAQs</a></li>
                            <li><a href="javascript:;">Price Plan</a></li>
                            <li><a href="javascript:;">Features</a></li>
                        </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
