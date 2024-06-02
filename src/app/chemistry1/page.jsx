import { getServerSession } from 'next-auth'
import { option } from '../api/auth/[...nextauth]/option'
import { redirect } from 'next/navigation'
import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";


const Folder = async () => {
     const session = await getServerSession(option);
    
  
   
  return (
    <div>
      
<h1 className='font-sans text-center text-3xl md:text-4xl italic font-extrabold mt-7 my-14'>ACS Chemistry Academic Cycle 1 </h1>
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




<a href="" target='_blank'><p className="flex bg-gray-900 text-white w-5/6 md:w-[360px] items-center justify-center py-1 m-auto my-10 gap-3 rounded-lg font-mono font-extrabold text-lg">Materials&nbsp; <GrDocumentPdf color="yellow"  size={25}/>
</p></a>
  
</section>

</div>




    </div>
  )
}

export default Folder