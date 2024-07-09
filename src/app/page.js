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
      <h1 className='text-center mt-3 font-extrabold tracking-tighter font-sans text-black text-[33px] md:text-[40px] md:mt-2 md:tracking-tighter '><span className='max-md:hidden'>Apple</span> Academic Cycle 2026 </h1>

<section className='grid items-center m-auto justify-center w-3/4 mt-3 '>
      
      <h1 className='text-center font-sans italic font-bold text-lg'>Welcome back <span className='font-sans italic font-extrabold tracking-tight normal-case'>{session?.user?.name}</span> </h1>
      <p className='text-lg text-start mt-1 font-sans font-bold tracking-wide'>account status: <span className='font-extrabold font-sans capitalize   italic'>{session?.user?.role}</span><br/></p>
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
<br/>
    <Link className='flex justify-center bg-cyan-100 md:bg-cyan-100 ring-[.2px] ring-black hover:ring-1 hover:ring-blue-950 mt-0 p-2 rounded-md hover:text-[17px] transition-all ease-in-out duration-200  font-sans font-semibold italic tracking-widest w-5/6 m-auto mb-2 md:w-[380px] gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='black'/></Link>

    </div>  
    

  
  
  )
}
export default page