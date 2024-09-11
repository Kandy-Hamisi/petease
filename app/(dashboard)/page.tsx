import { ProfileCard } from '@/components'
import React from 'react'

const DashboardPage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className='hidden xl:block w-[20%]'>
        <ProfileCard />
      </div>
    </div>
  )
}

export default DashboardPage
