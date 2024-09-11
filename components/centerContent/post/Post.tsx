import Image from 'next/image'
import React from 'react'
import { FaBookBookmark, FaCameraRetro, FaClock, FaComment, FaEllipsisVertical, FaHeart, FaImage, FaReply, FaShare, FaThumbsDown, FaThumbsUp } from 'react-icons/fa6'

const Post = () => {
  return (
    <div className='flex flex-col gap-4 text-peteaseBlue bg-peteaseGrey border-2 p-4 rounded-lg border-peteaseLightGrey'>
        {/* user and header info*/}
        <div className=' flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <Image
                    src="/founder.jpg"
                    alt=''
                    width={50}
                    height={50}
                    className='object-cover w-8 h-8 rounded-full'
                />
                <div>
                    <h2 className='text-sm font-semibold'>Certified General</h2>
                    <div className='text-xs flex items-center gap-1'>
                        <span className='flex items-center gap-1'><FaClock /> 12 minutes ago on </span>
                        <span className='font-semibold text-xs'>Mombasa PetKings</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <span className='cursor-pointer'>
                    <FaBookBookmark />
                </span>
                <span className='cursor-pointer'>
                    <FaEllipsisVertical />
                </span>
            </div>
        </div>
        <div>
            {/* description */}
            <p className='mb-3 text-sm font-semi-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda earum doloremque excepturi soluta alias eaque commodi magnam neque voluptates?</p>
            {/* image */}
            <div className='relative w-full min-h-64'>
                <Image
                    src="/founder.jpg"
                    alt=''
                    fill
                    className='object-cover rounded-lg'
                />
            </div>
        </div>
        {/* interactions */}
        <div className='border-b border-b-peteaseLightGrey flex items-center justify-between p-2'>
            <div className='flex items-center gap-2'>
                <span><FaThumbsUp /></span>
                <span className='text-xs font-semibold'>12</span>
                <span className='text-xs font-semibold'>Likes</span>
            </div>
            <div className='flex items-center gap-2'>
                <span><FaComment /></span>
                <span className='text-xs font-semibold'>2</span>
                <span className='text-xs font-semibold'>Comments</span>
            </div>
            <div className='flex items-center gap-2'>
                <span><FaShare /></span>
                <span className='text-xs font-semibold'>12</span>
                <span className='text-xs font-semibold'>Shares</span>
            </div>
        </div>
        {/* postComment */}
        <div className='flex items-center gap-2 my-2'>
            <Image
                src="/founder.jpg"
                alt=''
                width={50}
                height={50}
                className='object-cover w-8 h-8 rounded-full'
            />
            <div className='relative w-full rounded-full'>
                <input
                    type="text"
                    name="desc"
                    id=""
                    placeholder="What's on your mind?..."
                    className='rounded-full p-2 w-full outline-none bg-[#55585C] text-peteaseBlue placeholder:text-peteaseGrey text-sm'
                />
                <div className='flex items-center gap-2 absolute right-[20px] top-[10px]'>
                    <button>
                        <FaCameraRetro className='' />
                    </button>
                    <button>
                        <FaImage className='' />
                    </button>
                </div>
            </div>
        </div>
        {/* comment section */}
        <div>
            {/* filers and sorts */}
            <div className='flex items-center justify-between'>
                <div>
                    <span className='text-xs font-semibold'>Sort by:</span>
                    <select className='bg-transparent p-1 text-sm outline-none'>
                        <option value="latest" className='text-black text-xs'>Latest</option>
                        <option value="oldest" className='text-black text-xs'>Oldest</option>
                    </select>
                </div>
                <div>
                    <span className='text-xs font-semibold'>Filter by:</span>
                    <select className='bg-transparent p-1 text-sm outline-none'>
                        <option value="latest" className='text-black text-xs'>All</option>
                        <option value="oldest" className='text-black text-xs'>PetEase</option>
                    </select>
                </div>
            </div>
            {/* the comment */}
            <div className='mt-3 flex gap-2'>
                <div>
                    {/* user */}
                    <Image
                        src="/founder.jpg"
                        alt=''
                        width={40}
                        height={40}
                        className='object-cover w-6 h-6 rounded-full'
                    />
                </div>
                <div className='w-full border-b border-peteaseLightGrey'>
                    <div>
                        <p className='text-xs lg:text-sm'><span className='font-bold text-sm'>Anita Beng: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa veniam recusandae ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dicta nostrum molestiae!</p>
                    </div>
                    {/* the interactions to the comment */}
                    <div className='mt-3 flex items-center justify-between mb-3'>
                        <div className='text-xs'>
                            <span className='cursor-pointer flex items-center gap-2'><FaReply className='rotate-180' /> Reply Comments <span className='text-[8px] bg-peteaseLightGrey p-1 rounded-full flex items-center justify-center w-5 h-5'>12</span></span>
                        </div>
                        <div className='text-xs flex items-center gap-3'>
                            <span className='cursor-pointer'><FaHeart /></span>
                            <span className='cursor-pointer'><FaThumbsDown /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-3 p-2'>
                <span className='text-xs text-peteaseYellow'>View All Comments</span>
            </div>
        </div>
    </div>
  )
}

export default Post
