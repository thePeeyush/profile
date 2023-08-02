import Project from '@/components/project';
import data from './projects.json';
import React, { useRef, useEffect, useState } from 'react';

export default function Projects({setImage,setImghref}) {
  const targetDivRef = useRef(null);
  const [bgColor, setBgColor] = useState('black');
  const [opacity, setOpacity] = useState(0);


  const handleScroll = () => {
    if (targetDivRef.current) {
      const rect = targetDivRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const divHeight = targetDivRef.current.offsetHeight;
      const percentInView = (visibleHeight / divHeight) * 100;

      if (percentInView >= 60) {
        setBgColor('white');
        setOpacity(100)
      } else if (percentInView >= 40) {
        setBgColor('gray');
        setOpacity(40)
      } else if (percentInView >= 20) {
        setBgColor('rgba(0, 0, 0, 0.555)');
        setOpacity(20)
      } else {
        setBgColor('black');
        setOpacity(0)
      }

      if (percentInView < 20) {
        setImage("")
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(()=>{
    document.body.style.backgroundColor = bgColor;
    document.body.style.transition = 'background-color ease 0.3s';
  },[bgColor])

  return (
    <>
      

      <div ref={targetDivRef} className={`text-black my-80 h-full opacity-${opacity}`}>
      <div className="flex flex-col h-screen w-screen justify-end items-center">
        {
          data.projects.map((item , index )=>{
            return(
              <Project text={item.title} href={item.href} key={index} setImage={setImage} setImghref={setImghref} image={item.image}/>
            )
          })
        }
      </div>
    </div>
    </>
    
  );
};
