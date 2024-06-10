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
<h1 className='poet text-center text-3xl w-11/12 m-auto md:text-4xl  tracking-wide my-6 md:mb-14'>ACS Mathematics Cycle 1 </h1>


<section className='mt-2'>

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



<a href="https://docs.google.com/document/d/1DpBcWPmVGNlLy-IFoFhPiXCaMej0vUsxbDEAOQfEDic/edit?usp=sharing" target='_blank'><p className="flex bg-gray-900 text-white w-5/6 md:w-[360px] items-center justify-center py-1 m-auto mt-5 gap-3 rounded-lg font-mono font-extrabold text-lg">Materials&nbsp; <GrDocumentPdf color="yellow"  size={25}/>
</p></a>
  
</section><h1 className='font-serif font-extrabold italic text-center text-lg tracking-wide mt-6 '>2025 archive</h1>


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





<a href="https://docs.google.com/document/d/1DpBcWPmVGNlLy-IFoFhPiXCaMej0vUsxbDEAOQfEDic/edit?usp=sharing" target='_blank'><p className="flex bg-gray-900 text-white w-5/6 md:w-[360px] items-center justify-center py-1 m-auto mt-5 gap-3 rounded-lg font-mono font-extrabold text-lg">Materials&nbsp; <GrDocumentPdf color="yellow"  size={25}/>
</p></a>
  
</section>









<br />
<Link className='flex justify-center hover:bg-[#faf0d3] p-2 rounded-xl hover:text-[17px] transition-all ease-in-out duration-200  font-sans font-extrabold tracking-widest w-[250px] m-auto mb-2 gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='blue'/></Link>

    </div>
  )
}

export default Folder