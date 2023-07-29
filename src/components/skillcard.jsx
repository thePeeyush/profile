import Image from 'next/image'
import React from 'react'

export default function Skillcard({ skill , text}) {
  return (
    <div className=' flex flex-col justify-center items-center m-4 w-12 md:w-24'>
        <div className='text-4xl md:text-8xl'>
        {skill}
        </div>
        <h3 className=' text-xs'>{text}</h3>
    </div>
  )
}
