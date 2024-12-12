"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

// Define the structure for navigation items
interface NavigationItem {
    name: string;
    href: string;
}

// List of navigation items
const navigationItems: NavigationItem[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" }
];



// NavigationBar component
export default function NavigationBar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [prevScroll, setPrevScroll] = useState(0);
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Update hidden state based on scroll position
    function update(latest: number, prev: number): void {
        if (latest < 100) {
            setHidden(false);
        } else if (latest > 100 && latest > prev) {
            setHidden(true);
        }
    }

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        update(latest, prevScroll);
        setPrevScroll(latest);
    });

    return (
        <>
            <motion.nav
                className={cn(" z-50 w-full  top-0 min-w-full mx-auto py-2 px-5 md:px-16  fixed start-0",hidden?"bg-black/10 backdrop-blur-2xl border-b":" bg-transparent")}
          
            >
                <div className="flex justify-between w-full">
                    <a href="/"  className="">
                        <img src="/Picsart_24-12-10_11-35-05-391.png" className="w-12 h-12 font-semibold" alt="Logo" />
                    </a>
                    <div className="hidden md:flex items-center gap-9 text-base font-medium">
                        {navigationItems.map((item, index) => (
                            <a className=" opacity-80 text-md hover:opacity-100 hover:-translate-y-0.5 ease-in-out duration-150" key={index} href={item.href}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className=''>
                    <button className="group relative font-bold inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-black bg-transparent ">
                        <a href="mailto:mnreddygroup@gmail.com" className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
                            Get in Touch
                        </a>
                        <a href="mailto:mnreddygroup@gmail.com" className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-black transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                            <span className="z-10">Get in Touch</span>
                        </a>
                    </button>
                </div>
                </div>
                {isMenuOpen && (
                    <div className="flex my-16 sm:mx-16 bg-black/10 dark:bg-white/10 rounded-xl mx-4 flex-col px-5 py-7 gap-5 text-lg font-medium">
                        {navigationItems.map((item, index) => (
                            <motion.a
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ease: 'easeInOut', duration: 0.3, delay: index * 0.2, stiffness: 50, type: 'spring' }}
                                className='py-2 rounded-xl border border-black/20 px-4 flex items-center dark:border-white/15 hover:-translate-y-2 ease-in-out duration-150 hover:bg-black hover:text-white shadow dark:hover:bg-white dark:hover:text-black bg-white dark:bg-black'
                                href={item.href}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>
                )}
            </motion.nav>
        </>
    );
}


// MenuToggle component for the hamburger menu
interface MenuToggleProps {
    isMenuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuToggle({ isMenuOpen, setMenuOpen }: MenuToggleProps) {
    return (
        <button
            className={cn("md:hidden group inline-flex w-12 h-12 text-center items-center justify-center transition rounded-lg text-black dark:text-white")}
            onClick={() => setMenuOpen(!isMenuOpen)}
        >
            <svg className="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]", isMenuOpen ? "rotate-[315deg] [x:0] [y:7]" : "")} y="2" x="7" width="9" height="1.5" rx="1"></rect>
                <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]", isMenuOpen ? "rotate-45" : "")} y="7" width="16" height="1.5" rx="1"></rect>
                <rect className={cn("origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]", isMenuOpen ? "[y:7] [x:0] -rotate-[225deg]" : "")} y="12" width="9" height="1.5" rx="1"></rect>
            </svg>
        </button>
    );
}
