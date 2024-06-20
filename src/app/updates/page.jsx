import React from 'react'
import Post from '../component/post'

function page(props) {
  return (
    <div>
<h1 className='text-center font-serif italic font-bold text-2xl '>Latest updates</h1>

<div className='flex flex-wrap justify-between  gap-5 md:mx-5 lg:mx-8 lg:justify-between'>

<Post
date="21 june 2024"
road="https://www.facebook.com/apple.courses.netlify.app.3.0/"
name="Facebook page"
line="Follow Our New"
link="https://applecourses.netlify.app/_next/image?url=%2Fbetterfb.webp&w=1920&q=75"
color='bg-amber-200'
/>

<Post
date="10 june 2024"
line="Next vector class মঙ্গলবার"
link="https://i.ytimg.com/vi/evMyBo-GhKQ/sddefault.jpg"
color='bg-cyan-200'
/>



<Post
date="10 june 2024"
line="Math routine"
link="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/447693331_1044823740588194_4074598527797068328_n.jpg?stp=dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF1M5Km4C6MpAybSMC99KMWCjWG0hFR9qMKNYbSEVH2o7LqG_S9pR25nziNw15BGkhXnni3IcTmL9a1xxBlB4QY&_nc_ohc=Ryk4RL0U6O4Q7kNvgHsTXv-&_nc_ht=scontent.fdac5-1.fna&oh=00_AYBHNnSSqaRZ6CPZIg6uBToqTDKriqWlauCF_xkNtAC-Tw&oe=666C62F8"
color='bg-blue-100'
/>

<Post
date="10 june 2024"
line="Vector lecture 5 & Trigonometry lecture 1 & 2 has beed added."
color='bg-pink-200'
/>

</div>
    
    <br />
    
</div>
  )
}


export default page