import { getServerSession } from 'next-auth';
import { option } from '../api/auth/[...nextauth]/option';
import Link from 'next/link';
import { IoMdArrowRoundBack } from "react-icons/io";



const Denied = async () => {
    const session = await getServerSession(option);
    return(
        <div className="flex flex-col items-center justify-center h-[450px] md:h-[600px] ">
  <h1 className='text-center mx-5 text-2xl font-sans italic font-extrabold'><span className='text-3xl font-extrabold font-sans tracking-tighter italic'>Opps! </span> {session?.user?.name}. Looks like you do not have access to this course</h1>
  <p className='font-sans mt-3 italic font-bold text-lg'>Please <a className='text-black font-[900] underline italic font-sans tracking-widest' href="https://applecourses.netlify.app/payment26">buy</a> access to continue.</p>
<a className='mt-5 bg-gray-900 text-white px-3 py-2 mb-2 rounded-sm font-sans font-extrabold shadow-lg shadow-gray-500 hover:shadow-none active:tracking-widest ring-1 ring-pink-950' href="https://applecourses.netlify.app">Back to Apple Shop</a>
  
<Link className='flex justify-center gap-1 mx-5 mt-2 text-black font-extrabold font-sans text-[18px]  bg-[#23fefe] rounded-sm w-[173px] px-2 py-1 shadow-lg shadow-gray-500 active:bg-yellow-300 hover:shadow-none' href="/"><IoMdArrowRoundBack size={27} />
 HOME</Link>
  
  
  </div>
    )
}
export default Denied