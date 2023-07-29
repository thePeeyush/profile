import Project from '@/components/project';
import React, { useRef, useEffect, useState } from 'react';

export default function Projects() {
  const targetDivRef = useRef(null);
  const [bgColor, setBgColor] = useState('black');
  const [color, setColor] = useState('white');

  const handleScroll = () => {
    if (targetDivRef.current) {
      const rect = targetDivRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const divHeight = targetDivRef.current.offsetHeight;
      const percentInView = (visibleHeight / divHeight) * 100;

      if (percentInView >= 80) {
        setBgColor('white');
        setColor('black');
      } else if (percentInView >= 70) {
        setBgColor('rgba(255, 255, 255, 0.85)');
        setColor('rgba(0, 0, 0, 0.85)');
      } else if (percentInView >= 60) {
        setBgColor('rgba(255, 255, 255, 0.65)');
        setColor('rgba(0, 0, 0, 0.65)');
      } else if (percentInView >= 50) {
        setBgColor('rgba(255, 255, 255, 0.45)');
      } else if (percentInView >= 40) {
        setBgColor('rgba(255, 255, 255, 0.25)');
      } else {
        setBgColor('black');
        setColor('white')
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={targetDivRef} style={{ backgroundColor: bgColor, color : color, transition: 'background-color 0.3s' }} className=' my-32 h-full'>
      <div className="flex flex-col h-screen w-screen justify-end items-center relative">
        <Project text={'hvvm school'} href={'https://hvvm.netlify.app'} />
        <Project text={'carry Gito'} href={'https://hvvm.netlify.app'} />
        <Project text={'yo yo bike'} href={'https://hvvm.netlify.app'} />
        <Project text={'systumm'} href={'https://hvvm.netlify.app'} />
        <Project text={'like subscribe'} href={'https://hvvm.netlify.app'} />
      </div>
    </div>
  );
};
