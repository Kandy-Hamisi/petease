import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='h-16 flex items-center justify-between'>
      {/* left */}
      <div className='md:hidden lg:block w-[20%]'>
        <Link href="/" className='font-bold text-xl text-peteaseBlue'><span className='text-peteaseYellow'>Pet</span>Ease</Link>
      </div>
      {/* center */}
      <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
        {/* Links */}
        <div className="flex gap-6 text-peteaseBlue">
            <Link href="/">Home</Link>
            <Link href="/about">Feed</Link>
            <Link href="/contact">MarketPlace</Link>
            <Link href="/community">Community</Link>
            <Link href="/lost-and-found">Lost and Found</Link>
        </div>
        <div className='hidden xl:flex p-2 bg-peteaseBlack items-center rounded-xl'>
            <input
                type="text"
                placeholder='search...' 
                name=""
                id=""
                className='bg-transparent outline-none placeholder:text-peteaseBlue text-peteaseBlue'
            />
            <Image src="/search.png" alt='' width={14} height={14} className='cursor-pointer' />
        </div>
      </div>
      {/* right */}
      <div className='w-30% flex items-center gap-4 xl:gap-8 justify-end'>
        <div className="cursor-pointer">
            <Image src="/people.png" alt="" width={24} height={24} />
        </div>
        <div className="cursor-pointer">
            <Image src="/messages.png" alt="" width={20} height={20} />
        </div>
        <div className="cursor-pointer">
            <Image src="/notifications.png" alt="" width={20} height={20} />
        </div>
      </div>
    </header>
  )
}

export default Navbar
