import Sub from '../component/sub';
import Mat from '../component/mat';



const Folder = () => {
    
  
   
  return (
    <div className='select-none'>
     <h2 className='chapterHeading  m-auto mt-5 md:text-5xl tracking-tight italic md:tracking-normal md:mt-0  text-4xl'>Chemistry Cycle-01</h2> 
<h1 className='text-center text-pink-500  text-lg md:text-xl font-sans mt-3 md:mt-5'>2026 Classes</h1>

<div>

<section className='mt-2 md:mt-4'>

  <Sub
  name="Qualitative Chemistry"
  route="/chemistry1/c2"
  />
    <Sub
  name="Safe use up Laboratory"
  route="/chemistry1/c1"
  />



<Mat link="https://docs.google.com/document/d/1DNM9yVqphv2TOCIZoMkXV024YVMVUCgPGdGqJ9je0uk/edit?usp=sharing"/>
  
</section>

</div>




<h1 className='font-sans capitalize text-center text-pink-300 text-lg md:text-xl  my-5 md:my-8'>2025 archive </h1>
<div>

<section>

  <Sub
  name="Qualitative Chemistry"
  route="/chemistry1/archive-chem"
  />


<Mat link="https://docs.google.com/document/d/1DNM9yVqphv2TOCIZoMkXV024YVMVUCgPGdGqJ9je0uk/edit?usp=sharing"/>

  
</section>

</div>


    </div>
  )
}

export default Folder