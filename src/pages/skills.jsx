import Skillcard from '@/components/skillcard'
import Image from 'next/image'
import React from 'react'
import { PiDotsThreeOutlineBold } from "react-icons/pi";
import { AiOutlineHtml5 } from 'react-icons/ai'
import { TbBrandCss3 } from 'react-icons/tb'
import { SiNextdotjs ,SiExpress ,SiAppwrite } from 'react-icons/si'
import { BiLogoCPlusPlus ,BiLogoJavascript,BiLogoJava ,BiLogoReact,BiLogoMongodb, BiLogoNodejs, BiLogoGithub } from 'react-icons/bi'

export default function Skills() {
  return (<div className=' flex flex-col md:items-center py-10 mt-32 px-6'>
  <h1 className=' savo-3d text-4xl md:text-8xl px-10'>SKILLS</h1>
  <div className="flex flex-row md:flex-col py-10 md:py-0  md:items-center">
        <span className='text-2xl md:py-5 pr-4'>
        <PiDotsThreeOutlineBold/>
        </span>
        <p className=' max-w-xl text-gray-400 mr-16 md:mr-0 lg:max-w-4xl pb-10 text-left md:text-center nice'>
         I possess proficiency in programming languages such as C++, Java and Javascript along with web development skills in HTML, CSS, React, and Node.js. My expertise extends to database management using SQL, MySQL, and MongoDB. With a strong focus on problem-solving, I am adept at utilizing algorithms and data structures effectively. I am also well-versed in version control using Git.
    </p>
        </div>
  <div className=' flex flex-col lg:flex-row justify-center items-end gap-10'>
      <div>
        <Image
          src='/developer.png'
          alt='developer'
          width={500}
          height={500}
          className=' -translate-x-10 md:translate-x-0'
        />
      </div>
        <div className="skills flex flex-wrap justify-center items-center max-w-lg mr-16">
          <Skillcard skill={<AiOutlineHtml5/>} text={"html"} />
          <Skillcard skill={<TbBrandCss3/>} text={"css"} />
          <Skillcard skill={<BiLogoCPlusPlus/>} text={"cpp"} />
          <Skillcard skill={<BiLogoJavascript/>} text={"javascript"} />
          <Skillcard skill={<BiLogoJava/>} text={"java"} />
          <Skillcard skill={<BiLogoReact/>} text={"react"} />
          <Skillcard skill={<BiLogoMongodb/>} text={"mongodb"} />
          <Skillcard skill={<BiLogoNodejs/>} text={"node"} />
          <Skillcard skill={<SiExpress/>} text={"express"} />
          <Skillcard skill={<SiNextdotjs/>} text={"nextjs"} />
          <Skillcard skill={<SiAppwrite/>} text={"appwrite"} />
          <Skillcard skill={<BiLogoGithub/>} text={"github"} />

        </div>
     </div>
  </div>
    
  )
}
