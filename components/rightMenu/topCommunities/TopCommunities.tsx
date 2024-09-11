import Image from 'next/image'
import React from 'react'

const TopCommunities = () => {
  return (
    <div className='bg-peteaseGrey border-2 p-4 border-peteaseLightGrey rounded-lg '>
      <h4 className='text-sm font-bold'>Weekly Top #3 Communities</h4>
      <div className='mt-2'>
        <div>
            <Image
                src="/founder.jpg"
                alt=''
                width={200}
                height={80}
                className='w-full object-cover rounded-lg h-24'
            />
            <div className='text-xs flex flex-col space-y-2 mt-2'>
                <h5 className='text-sm font-semibold'>Founder's Corner</h5>
                <p className='text-sm'>Discuss your pet ideas and ventures</p>
            </div>
        </div>
        <div className='flex justify-center'>
            <span className='text-peteaseYellow text-xs cursor-pointer'>View 2 more</span>
        </div>
      </div>
    </div>
  )
}

export default TopCommunities
