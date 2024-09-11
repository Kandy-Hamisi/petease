import Image from 'next/image'
import React from 'react'
import { FaCameraRetro, FaImage } from 'react-icons/fa6'

const AddPost = () => {
  return (
    <div className='bg-peteaseGrey p-4 flex flex-col rounded-lg border-2 border-[#55585C]'>
        {/* image and input */}
        <div className='flex items-center gap-2'>
            <Image
                src="/founder.jpg"
                alt=''
                width={50}
                height={50}
                className='object-cover w-8 h-8 rounded-full'
            />
            <input
                type="text"
                name="desc"
                id=""
                placeholder="What's on your mind?..."
                className='rounded-full p-2 w-full outline-none bg-[#55585C] text-peteaseGrey placeholder:text-peteaseGrey text-sm'
            />
        </div>
        <div className='mt-4 flex items-center justify-between'>
            {/* left */}
            <div className='flex items-center gap-3'>
                <button>
                    <FaCameraRetro className='text-xl text-peteaseBlue hover:text-peteaseYellow transition-all duration-300 ease-in-out' />
                </button>
                <button>
                    <FaImage className='text-xl text-peteaseBlue hover:text-peteaseYellow transition-all duration-300 ease-in-out' />
                </button>
            </div>
            {/* right */}
            <div>
                <button className='bg-transparent border-2 border-[#55585C] rounded-md text-peteaseBlue p-2 w-20 text-sm font-semibold'>Post</button>
            </div>
        </div>
    </div>
  )
}

export default AddPost
