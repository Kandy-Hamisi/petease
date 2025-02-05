import React from 'react'
import UserSuggestion from './userSuggestion/UserSuggestion'

const FollowSuggestions = () => {
  return (
    <div className='p-4 rounded-lg border-2 flex flex-col gap-2 border-peteaseLightGrey bg-peteaseGrey'>
      <h5 className='text-lg font-semibold'>Who to Follow</h5>
      <UserSuggestion />
    </div>
  )
}

export default FollowSuggestions
