import { getServerSession } from 'next-auth'
import { option } from './api/auth/[...nextauth]/option'
import { redirect } from 'next/navigation'
import Sub from './component/sub'
const page = async (prop) => {
  const session =  await getServerSession(option)
  
   if(!session){
   redirect("/api/auth/signin?callbackUrl=/")
 }

  
  return (
    <div className='select-none'>
      <h1 className='text-center mt-4 font-[900] italic tracking-wide font-sans text-black text-3xl md:text-[40px] md:mt-2 md:tracking-tighter '><span className='max-md:hidden'>Apple</span> Academic Cycle 2026 </h1>

<section className='grid items-center m-auto justify-center w-3/4 mt-3 '>
      
      <h1 className='text-center poet text-lg'>Welcome back <span className='font-sans italic font-extrabold tracking-tight normal-case'>{session?.user?.name}</span> </h1>
      <p className='text-lg text-start mt-1 font-extrabold poet tracking-wider'>account status: <span className='font-extrabold font-sans capitalize   italic'>{session?.user?.role}</span><br/></p>
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
    name="ACS ICT DeCoder-2026"
    route="/denied"
    />
    </section>
    </div>  
    

  
  
  )
}
export default page