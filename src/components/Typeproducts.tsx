import Image from 'next/image'
import React from 'react'
import Dust from "@/../public/construction.webp"
import GradientFillButton from './ui/ViewMoreButton'

export default function Typeproducts() {
    return (
        <section className=' max-w-6xl mx-auto py-10 px-6 lg:px-4  '>
            <div className=' my-5'>
                <p className='  lg:text-center text-3xl lg:text-6xl  z-10 relative pr-12'>
                    Why Choose MNReddy Construction
                </p>
                <p className=' lg:text-center text-lg mt-4   z-10 relative '>
                    At MNReddy Construction, our commitment to excellence, unparalleled expertise, and unwavering dedication set us apart. Here's why you should choose us:
                </p>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-5'>
          
                <div className=' border bg-white  rounded-3xl shadow-md'>
                    <div className='h-[25rem] border overflow-hidden shadow-lg  relative rounded-3xl '>
                        <img
                            src='/NEWS-Base-materials-Crusher-dust-vs-Road-Base-–-which-is-best-for-your-application-scaled.jpg'
                            alt='dust'
                            height={1000}
                            width={1000}
                            className='h-full  hover:scale-110 ease-in-out transition-all duration-300 object-cover rounded-3xl left-0 top-0 w-full'
                        />
                    </div>
                    <div className='  bottom-0 z-30 p-7 flex flex-col gap-4 h-full  '>
                        <h1 className=' text-black font-bold text-xl'>Construction Material Supply                        </h1>
                        <p className=' text-black '>Delivering high-quality materials for every stage of your construction journey, from foundation to finish.</p>
                    <GradientFillButton href='/constructionmaterial'></GradientFillButton>
                    </div>

                </div>
                <div className=' border bg-white  rounded-3xl shadow-md'>
                    <div className='h-[25rem] border overflow-hidden shadow-lg  relative rounded-3xl '>
                        <img
                            src='/jcb-backhoe-loader-seal-set-500x500.png'
                            alt='dust'
                            height={1000}
                            width={1000}
                            className='h-full  hover:scale-110 ease-in-out transition-all duration-300 object-cover rounded-3xl left-0 top-0 w-full'
                        />
                    </div>
                    <div className=' z-30 p-7 flex flex-col gap-4 h-full'>
                        <h1 className=' text-black font-bold text-xl'>Machinery Supply
                        </h1>
                        <p className=' text-black'>Providing advanced machinery to ensure efficiency and precision in every project.
                        </p>
                    <GradientFillButton href='/machinerysupply'></GradientFillButton>
                    </div>
                    
                </div>
                <div className=' border bg-white  rounded-3xl shadow-md'>
                    <div className='h-[25rem] border overflow-hidden shadow-lg  relative rounded-3xl '>

                        <img
                            src='/12PM-WIRE-WED-27062019-SK.jpg'
                            alt='dust'
                            height={1000}
                            width={1000}
                            className='h-full  hover:scale-110 ease-in-out transition-all duration-300 object-cover rounded-3xl left-0 top-0 w-full'
                        />
                    </div>
                    <div className='  bottom-0 z-30 p-7 '>
                        <h1 className=' text-black font-bold text-xl'>Manpower Supply                        </h1>
                        <p className=' text-black mt-3'>Empowering your projects with skilled and reliable professionals to bring your vision to life.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
