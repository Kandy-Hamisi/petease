import { AddPost, Feed, Menu, MiniPanel, ProfileCard, TopCommunities } from '@/components'
import React from 'react'

const AppHomePage = () => {
  return (
    <div className='flex gap-6 pt-6 text-peteaseBlue'>
        <div className='hidden xl:block w-[25%]'>
            <div className='flex flex-col gap-6'>
                <ProfileCard />
                <Menu />
            </div>
        </div>
        <div className='w-full lg:w-[70%] xl:w-[50%]'>
            <div className='flex flex-col gap-6'>
                <AddPost />
                <Feed />
            </div>
        </div>
        <div className='hidden lg:block w-[25%]'>
            <div className='flex flex-col gap-6'>
                <TopCommunities />
                <MiniPanel />
            </div>
        </div>
    </div>
  )
}

export default AppHomePage
