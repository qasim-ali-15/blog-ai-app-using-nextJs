import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import SocialLinks from './SocialLinks'
import add from '../../public/assets/ad-1.jpg'

const navbar = () => {
  return (
    <header className='mb-5'>
        <nav className='flex justify-between items-center w-full bg-emerald-500 text-wh-10 px-10 py-4'>
        <div className='hidden sm:block'><SocialLinks/></div>
        <div className='flex justify-between items-center gap-10'>
            <Link href="/" className='hover:scale-110 hover:font-semi-bold'>Home</Link>
            <Link href="/" className='hover:scale-110 hover:font-semi-bold'>Trending</Link>
            <Link href="/" className='hover:scale-110 hover:font-semi-bold'>About</Link>
        </div>
        <div>
            <p>Sign In</p>
        </div>
        </nav>
        <div className='flex justify-between gap-8 mt-5 mb-4 mx-10'>
            <div className='basis-2/3 md:mt-3'>
                <h1 className='font-bold text-3xl md:text-5xl'>BLOG OF THE FUTURE</h1>
                <p className='text-sm mt-3'>Blog dedicated towards AI and generation and job automation.</p>
            </div>
            <div className='basis-full w-auto relative h-32'>
            <Image
              className=''
              alt="instagram"
              src={add}
              style={{ width: "900px", height: "120px", objectFit: "cover" }}
            />
            </div>
        </div>
      <hr className='border-1 mx-10' />
    </header>
  )
}

export default navbar