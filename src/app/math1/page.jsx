import Sub from '../component/sub';
import Mat from '../component/mat';


const Folder =  () => {
     
  return (
    <div>
<h1 className='chapterHeading max-sm:tracking-tight '>Mathematics Cycle-01</h1>
<h1 className='text-center text-pink-500 text-xl font-sans mt-4 max-md:hidden italic'>2026 Classes</h1>

<section className='mt-3 md:mt-5'>

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



<Mat link="https://docs.google.com/document/d/1DpBcWPmVGNlLy-IFoFhPiXCaMej0vUsxbDEAOQfEDic/edit?usp=sharing" />
  
</section>
<h1 className='font-sans italic capitalize text-pink-400 text-center text-lg tracking-wide mt-6 '>2025 archive</h1>


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


<Mat link="https://docs.google.com/document/d/1DpBcWPmVGNlLy-IFoFhPiXCaMej0vUsxbDEAOQfEDic/edit?usp=sharing" />

  
</section><br />

</div>
  )
}

export default Folder