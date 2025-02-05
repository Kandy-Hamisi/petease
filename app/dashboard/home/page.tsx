import { AddPost, Feed, FollowSuggestions, Menu, MiniPanel, ProfileCard, TopCommunities } from '@/components'
import React from 'react'

const AppHomePage = () => {
  return (
    <section className='flex flex-col gap-6'>
        <AddPost />
        <Feed />
    </section>
  )
}

export default AppHomePage
