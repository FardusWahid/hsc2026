import { getServerSession } from 'next-auth'
import { option } from '../api/auth/[...nextauth]/option'
import { redirect } from 'next/navigation'
import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";


const Folder = async () => {
     const session = await getServerSession(option);
    
  
   
  return (
    <div>
<h1 className='font-sans text-center text-3xl md:text-4xl italic font-extrabold mt-7 mb-0'>ACS Mathematics Academic Cycle 1 </h1>


<section className='mt-2'>

  <Sub
  name="Matrix & Determinant"
  route="/math1/m1"
  />
    <Sub
  name="Straight Line"
  route="/math1/m2"
  />
    <Sub
  name="Circle"
  route="/math1/m3"
  />



<a href="" target='_blank'><p className="flex bg-gray-900 text-white w-[340px] md:w-[360px] items-center justify-center py-1 m-auto mt-5 gap-3 rounded-lg font-mono font-extrabold text-lg">Materials&nbsp; <GrDocumentPdf color="yellow"  size={25}/>
</p></a>
  
</section>






    </div>
  )
}

export default Folder