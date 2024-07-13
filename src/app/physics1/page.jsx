import Sub from '../component/sub';
import Mat from '../component/mat';



const Folder =  () => {
     
  return (
    <div>
<h1 className='chapterHeading text-[36px] md:text-5xl'><span className='max-sm:hidden'>ACS </span>Physics Cycle-01 </h1>
<h1 className='text-center  text-pink-500 text-xl font-sans mt-4 max-md:hidden italic'>2026 Classes</h1>


<section className='mt-3 md:mt-5'>

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


<Mat link="https://docs.google.com/document/d/1oEaurdNat85mf7fs9IlVsnAtVF30YUaGQonaNGD29yU/edit?usp=sharing"/>

  
</section><br />


<p className='font-sans capitalize text-pink-400 text-center text-lg md:text-xl italic'>2025 archive </p>

<section>

  <Sub
  name="Measurements & Vector"
  route="/physics1/archive/mnv"
  />

<Sub
  name="Dynamics"
  route="/physics1/archive/dynamics"
  />


<Mat link="https://docs.google.com/document/d/1oEaurdNat85mf7fs9IlVsnAtVF30YUaGQonaNGD29yU/edit?usp=sharing"/>
  
</section>





    </div>
  )
}

export default Folder