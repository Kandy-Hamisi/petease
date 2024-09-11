import Image from 'next/image'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6'

const Requests = () => {
  return (
    <div className='flex flex-col gap-2'>
    
        {/* user requesting */}
        <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center gap-2'>
                <Image
                    src="/founder.jpg"
                    alt=''
                    width={40}
                    height={40}
                    className='w-8 h-8 rounded-full object-cover'
                />
                <div>
                    <span className='text-sm font-medium'>John Doe</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <span className='h-5 w-5 text-xs bg-blue-400 flex items-center justify-center rounded-full'><FaCheck /></span>
                <span className='h-5 w-5 text-xs bg-red-400 flex items-center justify-center rounded-full'><FaTimes /></span>
            </div>
        </div>
        {/* user requesting */}
        <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center gap-2'>
                <Image
                    src="/founder.jpg"
                    alt=''
                    width={40}
                    height={40}
                    className='w-8 h-8 rounded-full object-cover'
                />
                <div>
                    <span className='text-sm font-medium'>John Doe</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <span className='h-5 w-5 text-xs bg-blue-400 flex items-center justify-center rounded-full'><FaCheck /></span>
                <span className='h-5 w-5 text-xs bg-red-400 flex items-center justify-center rounded-full'><FaTimes /></span>
            </div>
        </div>
        {/* user requesting */}
        <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center gap-2'>
                <Image
                    src="/founder.jpg"
                    alt=''
                    width={40}
                    height={40}
                    className='w-8 h-8 rounded-full object-cover'
                />
                <div>
                    <span className='text-sm font-medium'>John Doe</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <span className='h-5 w-5 text-xs bg-blue-400 flex items-center justify-center rounded-full'><FaCheck /></span>
                <span className='h-5 w-5 text-xs bg-red-400 flex items-center justify-center rounded-full'><FaTimes /></span>
            </div>
        </div>

        {/* view Alla button */}
        <div className='flex justify-center'>
            <span className='text-xs text-peteaseYellow'>View More Requests</span>
        </div>
    </div>
  )
}

export default Requests
