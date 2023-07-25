import Link from 'next/link'
import React from 'react'

export default function Base() {
  return (
    <div className='flex flex-wrap gap-2 justify-between nice items-end px-10 mr-20 md:mr-48 my-10 text-white font-sans  z-10'>
        <Link href="https://github.com/thePeeyush/" className=' underline'>GitHub</Link>
        <p className='  max-h-10 max-w-sm tt'>This is Peeyush Dehariya , an student of B.tech Information Technology, Indore. I am a big tech enthusiast. </p>
    </div>
  )
}
