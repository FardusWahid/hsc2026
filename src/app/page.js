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

        <div className='bg-yellow-500 text-gray-900 gap-2 mt-2 flex justify-center items-center'>
        <h1 className='text-sm font-bold'>Try this new Interface</h1>
          <a href="https://ipremium.vercel.app" target='_blank' className='underline italic text-sm font-bold'>Click here</a>
          <p className='text-xs font-bold italic'>[may contain bugs]</p>
      </div>
     
      <h1 className='chapterHeading md:tracking-tighter'>ACS Academic <span className='max-[446px]:hidden'>Cycles</span> 2026</h1>

      <section className='flex  gap-1  justify-start wd  m-auto  text-[15px] md:w-1/2 lg:w-1/3 xl:w-[390px] md:justify-start my-4 font-sans italic font-semibold'>
      
      <h1 className='bg-gray-800 px-3 py-[2.5px] w-fit rounded-md shadow-inner shadow-gray-700 hover:bg-gray-900 tracking-tight md:tracking-normal'> <span>{session?.user?.name}</span></h1>
      <p className='bg-yellow-500 hover:bg-yellow-600 px-3 w-fit py-[2.5px] rounded-md shadow-inner text-black shadow-yellow-300'>status: <span>{session?.user?.role}</span></p>
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
