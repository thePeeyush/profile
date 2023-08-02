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
    <h1 className='savo-reg text-[1.6rem] md:text-6xl text-center z-20'>PEEYUSH <br />
    <span className='savo-out'>
        DEHARIYA
    </span>
    </h1>
    <div className="flex flex-row md:flex-col py-10 md:py-0  md:items-center">
        <span className='text-2xl md:py-5 pr-4'>
        <PiDotsThreeOutlineBold/>
        </span>
        <p className=' text-gray-400 max-w-xl mr-16 md:mr-0 lg:max-w-4xl pb-10 text-left md:text-center nice'>
        Hello! I am Peeyush Dehariya, a passionate and diligent student at IET DAVV Indore, pursuing a Bachelor&#39s degree in Information Technology. As an aspiring IT professional, I am deeply enthusiastic about technology, innovation, and its application to solve real-world challenges. Throughout my academic journey, I have honed my skills, acquired valuable experiences, and actively engaged in various projects and activities. This portfolio showcases some of my most significant projects, highlighting my capabilities and dedication to the field of Information Technology.
    </p>
        </div>
    
    </div>
  )
}

