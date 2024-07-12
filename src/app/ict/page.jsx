'use client'
import { GrNext } from 'react-icons/gr';
import Link from 'next/link';
import { GrDocumentPdf } from "react-icons/gr";
import { MdTipsAndUpdates } from "react-icons/md";


const ChapterLink = ({ href, chapter}) => {
  return (
    <div>
    <section className="mt-5 w-5/6 md:w-[360px] m-auto">
      <Link className=" bg-cyan-300 hover:bg-cyan-400 justify-center rounded-md md:py-3 text-black ring-1 ring-black m-auto py-[9px] my-2 font-semibold text-lg hover:text-[20px] md:text-xl md:hover:text-[22px] hover:ring-[1.6px] font-sans italic flex gap-2 transition-all ease-in-out duration-150" href={href}>
        {chapter}<GrNext size={27} />
      </Link>
    </section>
    </div>
  );
};

const MainPage = () => {
  return (
    <div className='select-none'>
      <h2 className="text-center font-sans mt-2 md:mt-1 font-extrabold  text-black text-[34px] tracking-tight md:text-5xl">ICT <span className='italic'>DE-CODER</span> 2026</h2>
     
      <ChapterLink href="ict/one" chapter="Chapter 1" />
      <ChapterLink href="ict/two" chapter="Chapter 2" />
      <ChapterLink href="ict/three" chapter="Chapter 3"  />
      <ChapterLink href="ict/four" chapter="Chapter 4"  />
      <ChapterLink href="ict/five" chapter="Chapter 5"  />
      <ChapterLink href="https://applecourses.netlify.app/freecourses/ict25" chapter="2025 archive"  />

<Link className='wd md:w-[375px] m-auto flex bg-black text-white items-center justify-center p-[9px] my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-sans font-bold text-lg' href="https://tinyurl.com/56748489">Materials&nbsp; <GrDocumentPdf color="white"  size={25} /></Link>
<Link className='flex justify-center bg-purple-900 hover:ring-1 hover:ring-black w-11/12 md:w-[380px] p-2 rounded-md hover:text-[17px] transition-all ease-in-out duration-200   font-sans font-thin text-white italic m-auto mb-2 gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='pink'/></Link>


<div className='flex justify-center mt-5'>
  <p className='text-[16px] font-semibold tracking-tight md:tracking-normal'>Shareable link: <span className='select-all font-bold selection:bg-yellow-400'>https://tinyurl.com/apple2026</span> </p>
</div> <br />
    </div>
  );
};

export default MainPage;
