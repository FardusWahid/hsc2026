import { getServerSession } from 'next-auth'
import { option } from '../api/auth/[...nextauth]/option'
import { redirect } from 'next/navigation'
import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";


const Folder = async () => {
     const session = await getServerSession(option);
    
  
   
  return (
    <div>
<h1 className='font-sans text-center text-3xl md:text-4xl italic font-extrabold mt-7 mb-0 w-11/12 m-auto'>Physics Academic Cycle-1 </h1>


<section className='mt-3 md:mt-10'>

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



<a href="https://docs.google.com/document/d/1oEaurdNat85mf7fs9IlVsnAtVF30YUaGQonaNGD29yU/edit?usp=sharing" target='_blank'><p className="flex bg-gray-900 text-white w-5/6 md:w-[370px] items-center justify-center py-1 m-auto mt-5 gap-3 rounded-lg font-mono font-extrabold text-lg">Materials&nbsp; <GrDocumentPdf color="yellow"  size={25}/>
</p></a>
  
</section><br />


<p className='font-serif text-center text-lg md:text-xl italic font-extrabold'>2025 archive </p>

<section>

  <Sub
  name="Measurements & Vector"
  route="/physics1/archive/mnv"
  />


<a href="https://docs.google.com/document/d/1oEaurdNat85mf7fs9IlVsnAtVF30YUaGQonaNGD29yU/edit?usp=sharing" target='_blank'><p className="flex bg-gray-900 text-white w-5/6 md:w-[370px] items-center justify-center py-1 m-auto mt-5 gap-3 rounded-lg font-mono font-extrabold text-lg">Materials&nbsp; <GrDocumentPdf color="yellow"  size={25}/>
</p></a>
  
</section>









    </div>
  )
}

export default Folder