'use client'
import { GrNext } from 'react-icons/gr';
import Link from 'next/link';
import { GrDocumentPdf } from "react-icons/gr";


const ChapterLink = ({ href, chapter}) => {
  return (
    <div>
    <section className="w-[265px] font-sans text-lg hover:text-xl mt-2 mb-5 m-auto text-white bg-pink-900 flex md:w-1/4 px-0 py-2 md:py-[9.5px] justify-center 
    ring-[.7px]  ring-black hover:ring-[1.2px] hover:bg-cyan-100 hover:text-purple-950 rounded-lg transition-all ease-in duration-150 font-semibold hover:font-bold">
      <Link className="flex gap-6 w-full justify-center" href={href}>
        {chapter}<GrNext size={27} />
      </Link>
    </section>
    </div>
  );
};

const MainPage = () => {
  return (
    <div className='select-none'>
      <h2 className="text-center font-sans mt-3 font-extrabold  text-black text-[34px] tracking-tight md:text-5xl">ICT <span className='italic'>DE-CODER</span> 2026</h2>
      <br />
      <ChapterLink href="ict/one" chapter="Chapter 1" />
      <ChapterLink href="ict/two" chapter="Chapter 2" />
      <ChapterLink href="ict/three" chapter="Chapter 3"  />
      <ChapterLink href="ict/four" chapter="Chapter 4"  />
      <ChapterLink href="ict/five" chapter="Chapter 5"  />
      <ChapterLink href="https://applecourses.netlify.app/freecourses/ict25" chapter="2025 archive"  />

      
      <Link className='flex justify-center bg-purple-700 ring-1 text-lg ring-black hover:ring-2 hover:ring-black mt-7 p-[7px]  rounded-lg hover:text-xl transition-all ease-in-out duration-200  font-sans font-bold text-white  w-[275px] m-auto md:w-[290px] lg:w-[370px] xl:w-[400px] gap-2' href="https://tinyurl.com/56748489">Materials&nbsp; <GrDocumentPdf color="white"  size={25} /></Link>
<div className='flex justify-center my-3 md:mt-5'>
  <p className='text-[16px] font-semibold tracking-tight md:tracking-normal'>Shareable link: <span className='select-all font-bold selection:bg-yellow-400'>https://tinyurl.com/apple2026</span> </p>
</div>
    </div>
  );
};

export default MainPage;
