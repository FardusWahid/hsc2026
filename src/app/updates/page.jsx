import React from 'react'
import Post from '../component/post'

function page(props) {
  return (
    <div>
<h1 className='text-center mt-1 font-sans font-extrabold text-2xl '>Latest updates</h1>

<div className='flex flex-wrap justify-between  gap-5 md:mx-5 lg:mx-8 lg:justify-between'>
<Post
date="28 june 2024"
road="https://www.facebook.com/share/PotRZm2sKSjALm6P/"
name="GROUP LINK"
line="তোমাদের minor কোনো request such as, any E-Books, Digital products or any webapp feature etcetera প্রয়োজন হলে এই Facebook Group এ post করতে পারো"
color='bg-[#ccff00] text-purple-950'
/>


<Post
date="26 june 2024"
road="https://www.facebook.com/groups/1451996508764221/permalink/1494593874504484/"
name="POST LINK"
line="ASG Compressed notes versison 2.0 তোমাদের জন্য Completely FREE! Apple Courses private group এর এই post এ Comment করো"
color='bg-pink-300 text-lime-950'
/>



</div>
    
    <br />
    
</div>
  )
}


export default page