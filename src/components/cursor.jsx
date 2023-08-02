// import React, { useEffect, useRef, useState } from 'react'
// import { BsArrowUpRight } from "react-icons/bs";

// export default function Cursor() {

//     const [link,setLink] = useState(false)
//     const cursorref = useRef(null);

//     useEffect(()=>{
//         window.onmousemove = (e) =>{
//             handlemove(e);
//         }
//     },[])

//     const handlemove = (e) => { 
//         const { clientX, clientY } = e;
//         let x = clientX -cursorref.current.offsetWidth/2;
//         let y = clientY -cursorref.current.offsetHeight/2;
//         if (e ) {
//             console.log(e);
//         }

//         const keyframe ={
//             transform : `translate(${x}px , ${y}px) scale(${link?8:1})`
//         }
//         cursorref.current.animate(keyframe,{
//             fill  : 'forwards',
//             duration : 2500 ,
//         })
//      }

//   return (
//     <div ref={cursorref} className=' flex justify-center items-center bg-white bg-opacity-50 text-black text-3xl w-10 h-10 border z-50 rounded-full fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 mycursor'>
//     {
//         link && <BsArrowUpRight/>
//     }
//     </div>
//   )
// }
