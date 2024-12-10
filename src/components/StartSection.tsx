import { Check } from "lucide-react"
import { AnimatedCounter } from "./ui/TextTicker"

export const TextTicker = () => {
    return (
        <div className=" bg-[#e6f2f5] px-6 lg:px-4">
            <div className=' w-full  flex flex-col py-24 gap-8  max-w-6xl mx-auto'>
                <p className='  lg:text-center text-4xl lg:text-6xl text-black z-10 relative lg:pr-12'>
                    Our Legacy of Excellence
                </p>
                <p className=' lg:text-center text-lg  text-black z-10 relative '>
                    MN REDDY Construction  has been a trusted name in infrastructure and construction management for over two decades. Recognizing the challenges faced by construction companies—delays in material delivery, quality issues, and manpower shortages—MN Reddy took the initiative to bridge these gaps.
                </p>
                <p className=' lg:text-center text-lg  text-black z-10 relative '>
                    With a mission to ensure that projects are completed on time with the highest standards of quality, MNRIL provides seamless solutions in construction materials, machinery, and manpower. Our unwavering commitment to timely delivery and strong client relationships has earned us a stellar reputation in the construction industry.

                </p>
                <div className=" grid grid-cols-2  lg:grid-cols-3 mx-auto gap-4 lg:gap-44 text-black">
                    <AnimatedCounter sign={"+"} subheading={"Projects Completed"} to={150} from={0} /> {/* use direction param for "up" or "down" */}
                    <AnimatedCounter sign={"%"} subheading={"Satisfaction Rate"} to={100} from={0} /> {/* use direction param for "up" or "down" */}
                    <AnimatedCounter sign={"+"} subheading={"Satisfied Clients"} to={110} from={0} /> {/* use direction param for "up" or "down" */}
                </div>
                <div className=" grid grid-cols-1  lg:grid-cols-3 gap-7 lg:gap-16">
                    <div className=" flex p-5 border shadow-lg border-black rounded-full gap-4 ">
                        <Check className=" bg-black rounded-full text-white p-1" />
                        <p className="">
                            Always building quality industrial
                        </p>
                    </div>
                    <div className=" flex p-5 border shadow-lg border-black rounded-full gap-4 ">
                        <Check className=" bg-black rounded-full text-white p-1" />
                        <p className="">
                            Best manufacturing service provider                        </p>
                    </div>
                    <div className=" flex p-5 border shadow-lg border-black rounded-full gap-4 ">
                        <Check className=" bg-black rounded-full text-white p-1" />
                        <p className="">
                            Experienced trusted contractor
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}