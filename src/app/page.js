import { getServerSession } from 'next-auth'
import { option } from './api/auth/[...nextauth]/option'
import { redirect } from 'next/navigation'
import Sub from './component/sub'
import Link from 'next/link';
import { MdTipsAndUpdates } from "react-icons/md";
const page = async (prop) => {
  const session =  await getServerSession(option)
  
   if(!session){
   redirect("/api/auth/signin?callbackUrl=/")
 }

  
  return (
    <div className='select-none'>
     
      <h1 className='chapterHeading'>ACS Academic <span className='max-sm:hidden'>Cycles</span> 2026</h1>

      <section className='flex  gap-2  justify-center  m-auto  text-[15px] md:w-1/2 lg:w-1/3 xl:w-[390px] md:justify-start my-4 font-mono italic font-extrabold'>
      
      <h1 className='bg-gray-800 px-3 w-fit rounded-md shadow-inner shadow-gray-700'> <span>{session?.user?.name}</span></h1>
      <p className='bg-yellow-500 px-3 w-fit rounded-md shadow-inner text-black shadow-yellow-300'>status: <span>{session?.user?.role}</span></p>
      </section>



      <section>

      <Sub
    name="Mathematics cycle 1"
    route="/math1"
    />

    <Sub
    name="Physics cycle 1"
    route="/physics1"
    />

<Sub
    name="Chemistry cycle 1"
    route="/chemistry1"
    />




<Sub
    name="Biomission cycle 1"
    route="/denied"
    />



<Sub
    name="FREE ICT DeCoder-2026"
    route="/ict"
    />
    </section>

<Link href="/updates" className="mat m-auto hover:bg-purple-600 flex bg-purple-500 text-black items-center font-semibold justify-center p-[9px] my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-sans  tracking-widest italic text-lg">See what is new<MdTipsAndUpdates size={24} color='black'/>
</Link>
</div>  
    

  
  
  )
}
export default page