'use client'

import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa6'
import Requests from '../requests/Requests'
import { FaCaretUp } from 'react-icons/fa'

const MiniPanel = () => {

    const [ isRequestsOpen, setIsRequestsOpen ] =  useState(false);

    
  return (
    <div className='flex flex-col gap-4 bg-peteaseGrey border-2 border-peteaseLightGrey rounded-lg p-4'>
      <div className='flex flex-col gap-2'>
        <div className='text-xs lg:text-sm flex items-center justify-between mb-3'>
            <h5 className='font-semibold'>My Requests</h5>
            <span className='cursor-pointer'>{isRequestsOpen? <FaCaretUp onClick={() => setIsRequestsOpen(false)} /> :<FaCaretDown onClick={() => setIsRequestsOpen(true)} />}</span>
        </div>
        {isRequestsOpen && <div className='transition-all duration-300 ease-in-out'>
            <Requests />
        </div>}
        <div className='text-xs lg:text-sm flex items-center justify-between mb-3'>
            <h5 className='font-semibold'>My Requests</h5>
            <span className='cursor-pointer'>{isRequestsOpen? <FaCaretUp onClick={() => setIsRequestsOpen(false)} /> :<FaCaretDown onClick={() => setIsRequestsOpen(true)} />}</span>
        </div>
        {isRequestsOpen && <div className='transition-all duration-300 ease-in-out'>
            <Requests />
        </div>}
        <div className='text-xs lg:text-sm flex items-center justify-between mb-3'>
            <h5 className='font-semibold'>My Requests</h5>
            <span className='cursor-pointer'>{isRequestsOpen? <FaCaretUp onClick={() => setIsRequestsOpen(false)} /> :<FaCaretDown onClick={() => setIsRequestsOpen(true)} />}</span>
        </div>
        {isRequestsOpen && <div className='transition-all duration-300 ease-in-out'>
            <Requests />
        </div>}
      </div>
    </div>
  )
}

export default MiniPanel
