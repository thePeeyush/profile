import React from 'react'
import {AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai'

export default function Footer() {
  return (
    <div>
<div className="w-full min-h-screen flex items-center justify-center">
        <div className=" mx-32 pr-12 w-full px-4 text-white flex flex-col">
            <div className="w-full text-3xl md:text-7xl font-bold">
                <h1 className="w-full md:w-2/3 savo-3d"> get in touch</h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                <p className="w-full md:w-2/3 text-gray-400 nice">Feel free to contact me, and I am excited to engage in meaningful conversations with you. Looking forward to hearing from you!</p>
                <div className="w-44 pt-6 md:pt-0">
                    <a href='mailto:peeyushdehariya951@gmail.com' className="bg-white text-black hover:bg-yellow-400 font-semibold nice justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Contact me</a>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex mt-24 mb-12 flex-col gap-10 md:flex-row justify-between">
                    <div className="savo-reg text-3xl">
                        <h1>Peeyush</h1>    
                    </div>
                    <div className="flex flex-row text-2xl space-x-8 items-center justify-center">
                        <a className='hover:text-yellow-400' href='https://www.linkedin.com/in/peeyush-dehariya-445a46213/'>
                            <AiFillLinkedin/>
                        </a>
                        <a className='hover:text-yellow-400' href='https://twitter.com/PeeyushDehariya'>
                            <AiFillTwitterSquare/>             
                        </a>
                        <a className='hover:text-yellow-400' href="https://www.instagram.com/the_peeyush30/">
                            <AiFillInstagram/>
                        </a>
                    </div>
                </div>
                <hr className="border-gray-600"/>
                <p className="w-full text-center my-12 text-gray-600 nice">No Copyright © 2023 Peeyush Dehariya</p>
            </div>
        </div>
    </div>
    </div>
  )
}
