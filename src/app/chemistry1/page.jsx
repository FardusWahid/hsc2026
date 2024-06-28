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
    <div className='select-none'>
      
<h1 className='font-sans text-center text-[35px] leading-[44px]  md:text-[41px] italic md:not-italic md:mb-10 mt-2 mb-2 font-extrabold  w-5/6 m-auto md:tracking-tight  '><span className='text-[35px] md:text-[41px] md:tracking-tight tracking-wider'>ACS Chemistry</span><span className='tracking-normal'> Cycle- 01</span> </h1>
<div>

<section>

  <Sub
  name="Qualitative Chemistry"
  route="/chemistry1/c2"
  />
    <Sub
  name="Safe use up Laboratory"
  route="/chemistry1/c1"
  />




<a href="https://docs.google.com/document/d/1DNM9yVqphv2TOCIZoMkXV024YVMVUCgPGdGqJ9je0uk/edit?usp=sharing" target='_blank'><p className="flex bg-gray-900 text-white w-5/6 md:w-[360px] items-center justify-center py-1 m-auto my-5 gap-3 rounded-lg font-sans font-semibold text-lg">Materials&nbsp; <GrDocumentPdf color="white"  size={25}/>
</p></a>
  
</section>

</div>




<h1 className='font-mono uppercase text-center text-lg md:text-xl italic font-extrabold mt-7 w-11/12 m-auto '>2025 archive </h1>
<div>

<section>

  <Sub
  name="Qualitative Chemistry"
  route="/chemistry1/archive-chem"
  />


<a href="https://docs.google.com/document/d/1DNM9yVqphv2TOCIZoMkXV024YVMVUCgPGdGqJ9je0uk/edit?usp=sharing" target='_blank'><p className="flex bg-gray-900 text-white w-5/6 md:w-[360px] items-center justify-center py-1 m-auto mt-5 gap-3 rounded-lg font-sans font-semibold text-lg">Materials&nbsp; <GrDocumentPdf color="white"  size={25}/>
</p></a>
  
</section>

</div>


<br />
<Link className='flex justify-center bg-[#fef2d0] md:bg-[#fef2d0] ring-[.3px] ring-blue-950 hover:ring-1 hover:ring-blue-950 mt-0 p-2 rounded-xl hover:text-[17px] transition-all ease-in-out duration-200  font-sans font-extrabold tracking-widest w-5/6 m-auto mb-2 md:w-[380px] gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='blue'/></Link>

    </div>
  )
}

export default Folder