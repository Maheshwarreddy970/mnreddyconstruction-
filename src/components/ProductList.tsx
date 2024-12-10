import React from 'react'
import { PorductDialog } from './DialogProducts'

export default function ProductList() {
    return (
        <section id='projects' className='max-w-6xl mx-auto mt-10 px-4 '>
            <p className='  text-3xl  lg:text-center lg:text-6xl text-black z-10 relative pr-12'>
                PROJECTS
            </p>
            <p className=' lg:text-center text-lg mt-3 text-black z-10 relative '>
                Explore our Recent projects
            </p>
            <div className='  grid grid-cols-1 lg:grid-cols-6 gap-7 mt-3  mx-auto'>
                <div className=' lg:col-span-4'>
                    <PorductDialog heading='Basil Woods School' subheading='Basil Woods School in Shamshabad is built with modern infrastructure, blending traditional design' img='/AllBanner-08.jpg'>
                    </PorductDialog>
                </div>
                <div className=' lg:col-span-2 '>
                    <PorductDialog heading='Adarsh Nagar' subheading='Adarsh Nagar Villas in Shamshabad offers a luxurious, fully gated community featuring spacious 3BHK and 4BHK villas with high aesthetic appeal and modern amenities. Designed for serenity and convenience, it promises an upscale living experience in a well-connected location' img='/Picsart_24-12-10_11-47-50-434.jpg'>
                    </PorductDialog>
                </div>
                <div className='lg:col-span-2'>
                    <PorductDialog heading='Aashritha' subheading='Aashritha Aero Villas in Shamshabad, Hyderabad, offers luxurious 4 BHK villas with spacious designs and premium amenities, strategically located near Rajiv Gandhi International Airport and Nehru ORR. These villas combine modern comfort with serene surroundings, providing a perfect blend of opulence and accessibility​
' img='/Picsart_24-12-10_12-06-30-679.jpg'>
                    </PorductDialog>
                </div>
                <div className='lg:col-span-4'>
                    <PorductDialog heading='IRA Aero City' subheading='IRA Aero City in Shamshabad is a premium residential project offering well-planned plots with excellent connectivity to key locations in Hyderabad, including the airport. Known for its strategic location, the project provides a blend of modern infrastructure and natural surroundings, making it an attractive choice for homebuyers and investors​
' img='/ira-aerocity-project-project-large-image1.jpg'>
                    </PorductDialog>
                </div>
            </div>
        </section >
    )
}
