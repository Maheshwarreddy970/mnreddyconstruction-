import Calltoaction from "@/components/Calltoaction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavigationBar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import { TextTicker } from "@/components/StartSection";
import TestimonialCarousel from "@/components/Testimonial ";
import Typeproducts from "@/components/Typeproducts";
import { CardHoverEffect } from "@/components/ui/CardHoverEffect";


export default function Home() {
  return (
    <div className="min-h-screen">
      <NavigationBar></NavigationBar>
      <Hero></Hero>
      <TextTicker></TextTicker>
      <ProductList></ProductList>
      <div className=" w-full bg-[#e6f2f5] shadow-md p-10 rounded-3xl my-10  max-w-6xl mx-auto flex flex-col gap-9">
        <p className='  text-start text-3xl lg:text-6xl text-black z-10 relative lg:pr-12'>
          Why Choose MNReddy Construction
        </p>
        <p className=' text-start text-lg  text-black z-10 relative '>
          At MNReddy Construction, our commitment to excellence, unparalleled expertise, and unwavering dedication set us apart. Here's why you should choose us:
        </p>
        <CardHoverEffect></CardHoverEffect>
      </div>
      {/* <TestimonialCarousel></TestimonialCarousel> */}
      <div className="">
        <Typeproducts></Typeproducts>
      </div>
      <Calltoaction></Calltoaction>
      <Footer></Footer>
    </div>
  );
}
