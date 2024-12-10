'use client';

import { motion } from "framer-motion";

const logos = [
    { name: 'Rame Reddy', image: '/rlogo.png' },
    { name: 'Google', image: '/logo.png' },
    { name: 'Instagram', image: '/FB_IMG_1733823100357.jpg' },
    { name: 'Microsoft', image: '/de31fd23-c82a-43a3-9310-27215f06ce19.png' },
    { name: 'Netflix', image: '/1733384160220.jpg' },
    { name: 'Spotify', image: '/20241205_130142.jpg' },
];

const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
};

const LogoCarousel = () => (
    <div
        className="group relative mt-6 flex gap-6 overflow-hidden p-5"
        style={{
            maskImage: 'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
        }}
    >
        <motion.div
            animate={{ translateX: '-50%' }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            className="flex shrink-0 flex-row justify-around gap-6 pr-6"
        >
            {logos.map((logo, i) => (
                <img
                    key={i}
                    src={logo.image}
                    className="h-16 w-16 dark:brightness-0 dark:invert"
                    alt={logo.name}
                />
            ))}
            {logos.map((logo, i) => (
                <img
                    key={i}
                    src={logo.image}
                    className="h-16 w-16 dark:brightness-0 dark:invert"
                    alt={logo.name}
                />
            ))}
            {logos.map((logo, i) => (
                <img
                    key={i}
                    src={logo.image}
                    className="h-16 w-16 dark:brightness-0 dark:invert"
                    alt={logo.name}
                />
            ))}
            {logos.map((logo, i) => (
                <img
                    key={i}
                    src={logo.image}
                    className="h-16 w-16 dark:brightness-0 dark:invert"
                    alt={logo.name}
                />
            ))}
        </motion.div>
    </div>
);

const LogoProof = () => (
    <section className="w-full bg-[#e6f2f5] shadow-md lg:p-8 p-4 rounded-3xl my-10  max-w-6xl mx-auto flex flex-col gap-9">
        <div className=" text-center text-xl font-semibold">
            OUR ONGOING PROJECTS
        </div>
        <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, type: 'spring', stiffness: 150 }}
            className="mx-auto w-full px-4 md:px-8 flex justify-center items-center"
        >
            <LogoCarousel />
        </motion.div>
    </section>
);

export default LogoProof;
