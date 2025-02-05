import Image from 'next/image'
import React from 'react'

const UserSuggestion = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
          <Image
            src="/founder.jpg"
            alt=''
            width={40}
            height={40}
            className='rounded-full w-8 h-8 object-cover'
          />
          <div>
            <h3 className='text-peteaseBlue text-xs font-semibold'>Petty Ponker</h3>
            <span className='text-peteaseBlue text-xs'>@ponker-easer</span>
          </div>
      </div>
      <div>
        <button className='p-1.5 cursor-pointer rounded-md border-peteaseYellow border text-peteaseYellow text-xs'>Follow</button>
      </div>
    </div>
  )
}

export default UserSuggestion
