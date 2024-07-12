import { getServerSession } from 'next-auth'
import { option } from '../api/auth/[...nextauth]/option'
import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";
import Link from 'next/link';
import { MdTipsAndUpdates } from "react-icons/md";



const Folder = async () => {
     const session = await getServerSession(option);
    
  
   
  return (
    <div>
<h1 className='w-9/12 m-auto font-sans text-center tracking-tight md:tracking-normal text-3xl md:text-[39px] font-extrabold mt-1 md:mt-1'>Physics Academic Cycle- 01 </h1>
<h1 className='text-center font-extrabold text-xl font-mono mt-4 max-md:hidden italic'>2024 Classes</h1>


<section className='mt-3 md:mt-5'>

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



<Link href="https://docs.google.com/document/d/1oEaurdNat85mf7fs9IlVsnAtVF30YUaGQonaNGD29yU/edit?usp=sharing" className="wd md:w-[375px] m-auto flex bg-black text-white items-center justify-center p-[9px] my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-sans font-bold text-lg">Materials&nbsp; <GrDocumentPdf color="white"  size={27}/>
</Link>
  
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


<Link href="https://docs.google.com/document/d/1oEaurdNat85mf7fs9IlVsnAtVF30YUaGQonaNGD29yU/edit?usp=sharing" className="wd md:w-[375px] m-auto flex bg-black text-white items-center justify-center p-[9px] my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-sans font-bold text-lg">Materials&nbsp; <GrDocumentPdf color="white"  size={27}/>
</Link>
  
</section>



<Link className='flex justify-center bg-purple-900 hover:ring-1 hover:ring-black w-11/12 md:w-[380px] p-2 rounded-md hover:text-[17px] transition-all ease-in-out duration-200   font-sans font-thin text-white italic m-auto mb-2 gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='pink'/></Link><br />





    </div>
  )
}

export default Folder