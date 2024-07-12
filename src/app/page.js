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
      <section className='flex justify-end lg:justify-end  l z-20'>
      
      <h1 className='text-[15px] max-w-[170px] overflow-hidden italic  bg-black text-start text-white px-2 rounded-md font-mono font-extrabold tracking-tighter mx-3 h-[24px] z-10'> <span className=''>{session?.user?.name}</span></h1>
      <p className='text-[15px] max-w-[170px] overflow-hidden italic  bg-red-900 text-start text-white px-2 rounded-md font-mono font-extrabold tracking-tighter mx-3 h-[24px] z-10'>status: <span className=''>{session?.user?.role}</span></p>
      </section>
      <h1 className='w-11/12 z-40 m-auto text-center font-extrabold tracking-tighter font-sans text-black text-[33px] md:text-[40px] md:tracking-tighter italic '> <span className='text-[38px] md:text-[40px]'> Apple Academic </span>Cycle 2026 </h1>




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

<Link href="" className="wd md:w-[375px] m-auto flex bg-black text-white items-center justify-center p-[9px] my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-sans font-bold text-lg">See what is new<MdTipsAndUpdates size={24} color='pink'/>
</Link>
</div>  
    

  
  
  )
}
export default page