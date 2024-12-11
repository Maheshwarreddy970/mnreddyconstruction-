import Link from 'next/link';
import Services from '../Services';
const GradientFillButton = ({href}:{href:string}) => {
    return (
        <Link href={href} className=" w-full p-2 text-center  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
            View Products
        </Link>
    )
}

export default GradientFillButton