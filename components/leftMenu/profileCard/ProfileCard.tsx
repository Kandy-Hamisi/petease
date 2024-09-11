import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='flex flex-col'>
      <div className='relative w-full flex items-center justify-center mb-4'>
        <Image
          src="/gopher.png"
          alt=''
          width={150}
          height={150}
          className='w-20 h-20 object-cover rounded-full border-peteaseBlue border-4'
        />
        <Image
          src="/founder.jpg"
          alt=''
          width={150}
          height={150}
          className='w-20 h-20 -ml-4 object-cover rounded-full border-peteaseYellow border-4'
        />
      </div>
      <div className='mb-4 text-peteaseBlue flex  flex-col items-center'>
        <h3 className='font-bold text-lg'>General Mixins</h3>
        <p className='text-sm font-semibold'>@generalmixins</p>
      </div>
      <div className='bg-peteaseGrey rounded-xl text-peteaseBlue p-4 flex items-center justify-between gap-4'>
        <div className='flex flex-col items-center'>
          <h4 className='text-sm font-semibold'>14.2k</h4>
          <p className='text-sm'>Followers</p>
        </div>
        <div className='flex flex-col items-center'>
          <h4 className='text-sm font-semibold'>14.2k</h4>
          <p className='text-sm'>Followers</p>
        </div>
        <div className='flex flex-col items-center'>
          <h4 className='text-sm font-semibold'>14.2k</h4>
          <p className='text-sm'>Followers</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
