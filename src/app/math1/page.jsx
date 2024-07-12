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
<h1 className=' w-9/12 m-auto font-sans text-center tracking-tight md:tracking-normal text-3xl md:text-[39px] font-extrabold mt-1 md:mt-1'>ACS Mathematics Cycle- 01 </h1>
<h1 className='text-center font-extrabold text-xl font-mono mt-4 max-md:hidden italic'>2024 Classes</h1>

<section className='mt-3 md:mt-5'>

  <Sub
  name="Straight Line"
  route="/math1/m1"
  />
    <Sub
  name="Circles"
  route="/math1/m2"
  />
    <Sub
  name="Trigonometry"
  route="/math1/m3"
  />



<Link href="https://docs.google.com/document/d/1DpBcWPmVGNlLy-IFoFhPiXCaMej0vUsxbDEAOQfEDic/edit?usp=sharing" className="wd md:w-[375px] m-auto flex bg-black text-white items-center justify-center p-[9px] my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-sans font-bold text-lg">Materials&nbsp; <GrDocumentPdf color="white"  size={27}/>
</Link>
  
</section>
<h1 className='font-mono  font-extrabold italic uppercase text-center text-lg tracking-wide mt-6 '>2025 archive</h1>


<section className='mt-2'>

  <Sub
  name="Straight Line"
  route="/math1/s-ar"
  />

<Sub
  name="Trigonometry"
  route="/math1/t-ar"
  />

  
<Sub
  name="Circles"
  route="/math1/c-ar"
  />





<Link href="https://docs.google.com/document/d/1DpBcWPmVGNlLy-IFoFhPiXCaMej0vUsxbDEAOQfEDic/edit?usp=sharing" className="wd md:w-[375px] m-auto flex bg-black text-white items-center justify-center p-[9px] my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-sans font-bold text-lg">Materials&nbsp; <GrDocumentPdf color="white"  size={27}/>
</Link>
  
</section>







<Link className='flex justify-center bg-purple-900 hover:ring-1 hover:ring-black w-11/12 md:w-[380px] p-2 rounded-md hover:text-[17px] transition-all ease-in-out duration-200   font-sans font-thin text-white italic m-auto mb-2 gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='pink'/></Link><br />

    </div>
  )
}

export default Folder