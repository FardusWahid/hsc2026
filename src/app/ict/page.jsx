'use client'
import { GrNext } from 'react-icons/gr';
import Link from 'next/link';
import { GrDocumentPdf } from "react-icons/gr";
import { MdTipsAndUpdates } from "react-icons/md";
import Mat from '../component/mat';


const ChapterLink = ({ href, chapter}) => {
  return (
    <div>
      <Link className="chapter  flex gap-2 justify-center" href={href}>
        {chapter}<GrNext size={27} />
      </Link>
    </div>
  );
};

const MainPage = () => {
  return (
    <div className='select-none'>
      <h2 className="chapterHeading tracking-">ICT DECODER 2026</h2>
     
      <ChapterLink href="ict/one" chapter="Chapter 1" />
      <ChapterLink href="ict/two" chapter="Chapter 2" />
      <ChapterLink href="ict/three" chapter="Chapter 3"  />
      <ChapterLink href="ict/four" chapter="Chapter 4"  />
      <ChapterLink href="ict/five" chapter="Chapter 5"  />
      <ChapterLink href="https://applecourses.netlify.app/freecourses/ict25" chapter="2025 archive"  />

<Mat link="https://tinyurl.com/56748489"/>



<div className='flex justify-center mt-5'>
  <p className='text-[16px] font-serif tracking-tighter md:tracking-normal'>Shareable link: <span className='select-all font-bold tracking-normal selection:bg-yellow-400 selection:text-black'>https://tinyurl.com/apple2026</span> </p>
</div> <br />
    </div>
  );
};

export default MainPage;
