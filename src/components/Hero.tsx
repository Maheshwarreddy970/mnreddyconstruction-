import React from 'react'

export default function Hero() {
    return (
        <section id='home' className=' relative px-10 lg:px-4 lg:h-screen'>
            <div className=' h-full lg:h-screen w-full absolute top-0 left-0'>
                <img src='/cover.avif' className=' h-full lg:h-screen w-full object-cover' alt='cover photo'></img>
            </div>

            
            <div className=' w-full  flex flex-col pt-48 gap-8  max-w-6xl mx-auto'>
                <p className='  text-start text-[2.2rem] font-medium lg:text-7xl text-black z-10 relative lg:pr-12'>
                Building Dreams with Timely Support
                </p>
                <p className=' text-start text-xl  text-black z-10 relative '>
                 of Excellence in Infrastructure and Construction Management
                </p>
                <div className='my-12'>
                    <a href="tel:+916302786500" className="group shadow-lg relative font-bold inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white ">
                        <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
                            Learn More
                        </div>
                        <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-black transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                            <span className="z-10">Learn More</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
