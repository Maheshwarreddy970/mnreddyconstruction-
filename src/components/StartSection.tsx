import { Check } from "lucide-react"
import { AnimatedCounter } from "./ui/TextTicker"

export const TextTicker = () => {
    return (
        <div className=" bg-[#e6f2f5] px-4">
            <div className=' w-full  flex flex-col py-24 gap-8  max-w-6xl mx-auto'>
                <p className='  text-center text-6xl text-black z-10 relative pr-12'>
                    Our Legacy of Excellence
                </p>
                <p className=' text-center text-lg  text-black z-10 relative '>
                    Established 2012, MNReddy has been a leading force in the construction industry, specializing in commercial office building construction. Our commitment to quality and innovation sets us apart
                </p>
                <div className=" grid grid-cols-2  lg:grid-cols-3 mx-auto gap-4 lg:gap-44 text-black">
                    <AnimatedCounter sign={"+"} subheading={"Projects Completed"} to={150} from={0} /> {/* use direction param for "up" or "down" */}
                    <AnimatedCounter sign={"%"} subheading={"Satisfaction Rate"} to={100} from={0} /> {/* use direction param for "up" or "down" */}
                    <AnimatedCounter sign={"+"} subheading={"Satisfied Clients"} to={110} from={0} /> {/* use direction param for "up" or "down" */}
                </div>
                <div className=" grid grid-cols-1  lg:grid-cols-3 gap-16">
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