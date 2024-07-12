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
      
<h1 className=' w-11/12 m-auto font-sans text-center tracking-tight md:tracking-normal text-[35px] leading-[45px] md:text-[39px] font-extrabold mt-1 md:mt-1'><span className='text-[35px] md:text-[41px] md:tracking-tight tracking-tight'>Apple Chemistry</span><span className='tracking-tight'> Cycle- 01</span> </h1>
<h1 className='text-center font-extrabold text-xl font-mono mt-4 max-md:hidden italic'>2024 Classes</h1>

<div>

<section className='mt-3 md:mt-5'>

  <Sub
  name="Qualitative Chemistry"
  route="/chemistry1/c2"
  />
    <Sub
  name="Safe use up Laboratory"
  route="/chemistry1/c1"
  />




<Link href="https://docs.google.com/document/d/1DNM9yVqphv2TOCIZoMkXV024YVMVUCgPGdGqJ9je0uk/edit?usp=sharing" className="wd md:w-[375px] m-auto flex bg-black text-white items-center justify-center p-[9px] my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-sans font-bold text-lg">Materials&nbsp; <GrDocumentPdf color="white"  size={27}/>
</Link>
  
</section>

</div>




<h1 className='font-mono uppercase text-center text-lg md:text-xl italic font-extrabold mt-7 w-11/12 m-auto '>2027 archive </h1>
<div>

<section>

  <Sub
  name="Qualitative Chemistry"
  route="/chemistry1/archive-chem"
  />


<Link href="https://docs.google.com/document/d/1DNM9yVqphv2TOCIZoMkXV024YVMVUCgPGdGqJ9je0uk/edit?usp=sharing" className="wd md:w-[375px] m-auto flex bg-black text-white items-center justify-center p-[9px] my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-sans font-bold text-lg">Materials&nbsp; <GrDocumentPdf color="white"  size={27}/>
</Link>
  
</section>

</div>

<Link className='flex justify-center bg-purple-950 hover:ring-1 hover:ring-black w-11/12 md:w-[380px] p-2 rounded-md hover:text-[17px] transition-all ease-in-out duration-200   font-sans font-thin text-white italic m-auto mb-2 gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='pink'/></Link><br />

    </div>
  )
}

export default Folder