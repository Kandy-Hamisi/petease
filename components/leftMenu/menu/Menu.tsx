import Link from 'next/link'
import React from 'react'
import { FaCalendarAlt, FaHome } from 'react-icons/fa'
import { FaCalendar, FaPeopleArrows, FaRegNewspaper, FaShop } from 'react-icons/fa6'

const Menu = () => {
  return (
    <div className='bg-peteaseGrey border-2 border-peteaseLightGrey rounded-lg p-4 flex flex-col gap-2'>
      <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-peteaseYellow hover:text-peteaseGrey duration-300 ease-in-out transition-colors'>
        <span><FaHome /></span>
        <span>Home</span>
      </Link>
      <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-peteaseYellow hover:text-peteaseGrey duration-300 ease-in-out transition-colors'>
        <span><FaPeopleArrows /></span>
        <span>Community</span>
      </Link>
      <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-peteaseYellow hover:text-peteaseGrey duration-300 ease-in-out transition-colors'>
        <span><FaRegNewspaper /></span>
        <span>Feed</span>
      </Link>
      <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-peteaseYellow hover:text-peteaseGrey duration-300 ease-in-out transition-colors'>
        <span><FaShop /></span>
        <span>MarketPlace</span>
      </Link>
      <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-peteaseYellow hover:text-peteaseGrey duration-300 ease-in-out transition-colors'>
        <span><FaCalendarAlt /></span>
        <span>PetEase Events</span>
      </Link>
    </div>
  )
}

export default Menu
