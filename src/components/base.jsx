import Link from 'next/link'
import React from 'react'
import { PiDotsThreeOutlineBold } from "react-icons/pi";

export default function Base() {
  return (
    <div className='flex flex-col md:flex-row gap-2 justify-between nice max-w-xs md:max-w-full  md:items-end mx-5 md:mx-20 md:mr-48 my-4 text-white font-sans  z-10'>
        <Link href="https://github.com/thePeeyush/" className=' underline'>GitHub</Link>
        <div className="flex md:flex-row  items-start">
        <span className='text-2xl pr-4'>
        <PiDotsThreeOutlineBold/>
        </span>
        <p className=' max-w-[200px] md:max-w-xs'>Forever curious, always exploring the cutting edge of technology. Passionate about shaping a tech-driven world.</p>
        </div>
        
    </div>
  )
}
