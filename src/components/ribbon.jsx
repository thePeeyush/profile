import { useEffect, useRef } from "react"

export default function Ribbon() {
  
  return (
    <div  className='ribbon w-[92vh] h-20 text-black text-4xl flex items-center absolute right-0 rotate-90 translate-x-[40%] md:translate-x-[30%] translate-y-[45vh]  py-4 overflow-hidden bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 ' >
      <h1  className='mtext savo-bold relative whitespace-nowrap'>
       : C++ : JAVA : HTML : CSS : JAVASCRIPT : REACT : NEXT : NODE : EXPRESS : MONGODB : SQL 
      </h1>
    </div>
  )
}

