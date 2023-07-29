import React, { useEffect, useRef } from 'react'

export default function Cursor() {

    const cursorref = useRef(null);

    useEffect(()=>{
        window.onmousemove = (e) =>{
            handlemove(e);
        }
    },[])

    const handlemove = (e) => { 
        const { clientX, clientY } = e;
        let x = clientX -20;
        let y = clientY -20;
        const keyframe ={
            transform : `translate(${x}px , ${y}px)`
        }
        cursorref.current.animate(keyframe,{
            fill  : 'forwards',
            duration : 2500 ,
        })
     }

  return (
    <div ref={cursorref} className=' w-10 h-10 border z-50 rounded-full fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 mycursor'></div>
  )
}
