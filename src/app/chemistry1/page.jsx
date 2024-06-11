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
      
<h1 className='font-sans text-center text-3xl md:text-4xl md:tracking-wider italic md:mb-10 mt-5 mb-7 font-extrabold  w-11/12 m-auto '>ACS Chemistry Cycle 1 </h1>
<div className=''>

<section className='mt-2'>

  <Sub
  name="Qualitative Chemistry"
  route="/chemistry1/c2"
  />
    <Sub
  name="Safe use up Laboratory"
  route="/chemistry1/c1"
  />




<a href="https://docs.google.com/document/d/1DNM9yVqphv2TOCIZoMkXV024YVMVUCgPGdGqJ9je0uk/edit?usp=sharing" target='_blank'><p className="flex bg-gray-900 text-white w-5/6 md:w-[360px] items-center justify-center py-1 m-auto my-5 gap-3 rounded-lg font-mono font-extrabold text-lg">Materials&nbsp; <GrDocumentPdf color="yellow"  size={25}/>
</p></a>
  
</section>

</div>




<h1 className='font-serif text-center text-lg md:text-xl italic font-extrabold mt-8 w-11/12 m-auto '>2025 archive </h1>
<div>

<section className='mt-2'>

  <Sub
  name="Qualitative Chemistry"
  route="/chemistry1/archive-chem"
  />


<a href="https://docs.google.com/document/d/1DNM9yVqphv2TOCIZoMkXV024YVMVUCgPGdGqJ9je0uk/edit?usp=sharing" target='_blank'><p className="flex bg-gray-900 text-white w-5/6 md:w-[360px] items-center justify-center py-1 m-auto mt-5 gap-3 rounded-lg font-mono font-extrabold text-lg">Materials&nbsp; <GrDocumentPdf color="yellow"  size={25}/>
</p></a>
  
</section>

</div>


<br />
<Link className='flex justify-center bg-[#eae0c3] md:bg-[#e2d5b0] mt-0 p-2 rounded-xl hover:text-[17px] transition-all ease-in-out duration-200  font-sans font-extrabold tracking-widest w-11/12 m-auto mb-2 md:w-[380px] gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='blue'/></Link>






    </div>
  )
}

export default Folder