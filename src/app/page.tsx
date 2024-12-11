import Calltoaction from "@/components/Calltoaction";
import Hero from "@/components/Hero";
import LogoProof from "@/components/Logos";
import ProductList from "@/components/ProductList";
import { TextTicker } from "@/components/StartSection";
import Typeproducts from "@/components/Typeproducts";
import { CardHoverEffect } from "@/components/ui/CardHoverEffect";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero></Hero>
      <TextTicker></TextTicker>
      <ProductList></ProductList>
      {/* <TestimonialCarousel></TestimonialCarousel> */}
      <div className=" px-4">
      <LogoProof></LogoProof>
      </div>
      <section id="services" className="">
        <Typeproducts></Typeproducts>
      </section>
      <div className=" w-full  bg-[#e6f2f5] shadow-md p-5 lg:p-10 rounded-3xl my-10  max-w-6xl mx-auto flex flex-col gap-9">
        <p className='  text-start text-2xl lg:text-4xl text-black z-10 relative lg:pr-12'>
        Why Choose MNReddy Construction for Manpower, Materials, and Machinery
        </p>
        <p className=' text-start text-lg  text-black z-10 relative '>
        At MNReddy Construction, our dedication to excellence and specialized solutions make us your trusted partner for all construction needs. Heres why we stand out
        </p>
        <CardHoverEffect></CardHoverEffect>
      </div>
      <Calltoaction></Calltoaction>
    </div>
  );
}
