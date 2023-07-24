import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='p-4'>
        <Image
            src="/r.png"
            width={200}
            height={100}
            alt='logo'
        />
    </div>
  )
}
