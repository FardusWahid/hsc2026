import React from 'react'
import Post from '../component/post'

function page(props) {
  return (
    <div>
<h1 className='text-center font-serif italic font-bold text-2xl '>Latest updates</h1>

<div className='flex flex-wrap justify-between  gap-5 md:mx-5 lg:mx-8 lg:justify-between'>


<Post
date="10 june 2024"
line="Vector lecture 5 & Trigonometry lecture 1 & 2 has beed added."
color='bg-pink-200'
/>



</div>
    
    
    
</div>
  )
}


export default page