import { getServerSession } from 'next-auth'
import { option } from '../api/auth/[...nextauth]/option'
import { redirect } from 'next/navigation'
import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";
import Link from 'next/link';
import { MdTipsAndUpdates } from "react-icons/md";



const Folder = async () => {
     const session = await getServerSession(option);
    
  
   
  return (
    <div>
<h1 className='font-sans text-center text-[32px] leading-10 md:text-4xl italic font-extrabold mt-2 mb-0 w-11/12 md:not-italic m-auto'>Physics Academic Cycle- 01 </h1>


<section className='mt-3 md:mt-7'>

  <Sub
  name="Measurements"
  route="/physics1/p1"
  />
    <Sub
  name="Vector"
  route="/physics1/p2"
  />
    <Sub
  name="Dynamics"
  route="/physics1/p3"
  />



<a href="https://docs.google.com/document/d/1oEaurdNat85mf7fs9IlVsnAtVF30YUaGQonaNGD29yU/edit?usp=sharing" target='_blank'><p className="flex bg-gray-900 text-white w-5/6 md:w-[370px] items-center justify-center py-1 m-auto mt-5 gap-3 rounded-lg font-sans font-semibold text-lg">Materials&nbsp; <GrDocumentPdf color="white"  size={25}/>
</p></a>
  
</section><br />


<p className='font-mono uppercase text-center text-lg md:text-xl italic font-extrabold'>2025 archive </p>

<section>

  <Sub
  name="Measurements & Vector"
  route="/physics1/archive/mnv"
  />

<Sub
  name="Dynamics"
  route="/physics1/archive/dynamics"
  />


<a href="https://docs.google.com/document/d/1oEaurdNat85mf7fs9IlVsnAtVF30YUaGQonaNGD29yU/edit?usp=sharing" target='_blank'><p className="flex bg-gray-900 text-white w-5/6 md:w-[370px] items-center justify-center py-1 m-auto mt-5 gap-3 rounded-lg font-sans font-semibold text-lg">Materials&nbsp; <GrDocumentPdf color="white"  size={25}/>
</p></a>
  
</section>


<br />
<Link className='flex justify-center bg-[#fef4d6] hover:ring-1 ring-blue-950 md:bg-[#fbf0d2] w-11/12 md:w-[380px] p-2 rounded-xl hover:text-[17px] transition-all ease-in-out duration-200  font-sans font-extrabold tracking-widest m-auto mb-2 gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='blue'/></Link>






    </div>
  )
}

export default Folder