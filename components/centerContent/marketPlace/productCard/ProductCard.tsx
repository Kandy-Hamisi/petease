import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa6';

type ProductFeed = {
    id: number;
    sellerId: number;
    image: string;
    title: string;
    description: string;
    price: number;
    rating: number;
}

const ProductCard = ({ id, sellerId, image, title, description, price, rating}: ProductFeed) => {
  return (
    <div className='relative w-[200px] bg-peteaseBlue rounded-lg'>
        <div>
            <Image
                src={image}
                alt={title}
                height={100}
                width={200}
                className='p-2 object-cover'
            />
        </div>
        <div className='bg-white p-2 font-boldx rounded-b-lg'>
            <div className='text-xs lg:text-sm flex items-center justify-between'>
                <h5 className='text-peteaseBlack font-bold'>{title}</h5>
                <h5 className='flex items-center gap-2'><span><FaStar className='text-peteaseYellow' /></span><span className='text-peteaseGrey'>{rating}</span></h5>
            </div>
            <div className='my-3 leading-[30px]'>
                <p className='text-xs text-peteaseLightGrey'>{description}</p>
            </div>
            <div className='flex items-center'>
                <h5 className='text-xs text-peteaseBlack font-bold w-1/2'>Price: ${price}</h5>
                <button className='w-1/2 text-xs text-white font-semibold py-2 rounded-lg bg-peteaseYellow'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard