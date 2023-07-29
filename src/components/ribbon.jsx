import { useEffect, useRef } from "react"

export default function Ribbon() {
  
  return (
    <div  className=' z-40 ribbon w-[100vh] lg:w-[92vh] h-10 md:h-20 text-black text-4xl flex items-center fixed right-0 rotate-90 translate-x-[43%] md:translate-x-[35%] translate-y-[45vh]  lg:py-4 overflow-hidden bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 ' >
      <h1  className='mtext savo-bold relative whitespace-nowrap'>
       : C++ : JAVA : HTML : CSS : JAVASCRIPT : REACT : NEXT : NODE : EXPRESS : MONGODB : SQL 
      </h1>
    </div>
  )
}

