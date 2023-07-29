import Image from 'next/image'
import React from 'react'
import { PiDotsThreeOutlineBold } from "react-icons/pi";


export default function Intro() {
  return (
    <div className='mt-20 flex flex-col md:items-center px-6'>
    <Image
        src='/hacker.png'
        alt='hacker'    
        width={300}
        height={300}
        className='rounded w-full p-5 max-w-lg'
    />
    <h1 className='savo-reg text-3xl md:text-6xl text-center z-20'>PEEYUSH <br />
    <span className='savo-out'>
        DEHARIYA
    </span>
    </h1>
    <div className="flex flex-row md:flex-col py-10 md:py-0  md:items-center">
        <span className='text-2xl md:py-5 pr-4'>
        <PiDotsThreeOutlineBold/>
        </span>
        <p className=' max-w-xl mr-16 md:mr-0 lg:max-w-4xl pb-10 text-left md:text-center nice'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, autem? Doloremque cum nulla rem non, reiciendis, totam nobis, expedita culpa fugit magni autem corrupti vitae voluptatibus eos quas! Voluptatem, ipsa?
    </p>
        </div>
    
    </div>
  )
}

