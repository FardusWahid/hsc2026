import { getServerSession } from 'next-auth';
import { option } from '../api/auth/[...nextauth]/option';
import Link from 'next/link';
import { IoMdArrowRoundBack } from "react-icons/io";



const Denied = async () => {
    const session = await getServerSession(option);
    return(
        <div className="flex flex-col items-center justify-center h-[450px] md:h-[600px] ">
  <h1 className='text-center mx-5 text-2xl font-sans text-cyan-300 italic font-extrabold'><span className='text-3xl font-extrabold font-sans tracking-tighter italic'>Opps! </span> {session?.user?.name}. Looks like you do not have access to this course</h1>
  <p className='font-sans text-cyan-400 mt-3 italic font-bold text-lg'>Please <a className='text-purple-600 font-extrabold underline italic font-serif tracking-widest' href="https://applecourses.netlify.app/payment26">buy</a> access to continue.</p>
<a className='mt-5 bg-[#C8F560] text-black  px-2 py-2 mb-2 rounded-md font-sans font-extrabold hover:bg-yellow-500 hover:tracking-tight italic shadow-inner shadow-yellow-100  hover:shadow-none' href="https://applecourses.netlify.app">Back to Apple Shop</a>
  
<Link className='flex justify-center gap-1 mx-5 mt-3 text-cyan-200 font-extrabold font-sans text-[18px]  bg-pink-800 rounded-md w-[173px] px-2 py-1 shadow-md shadow-gray-900  hover:shadow-none' href="/"><IoMdArrowRoundBack size={27} />
 HOME</Link>
  
  
  </div>
    )
}
export default Denied