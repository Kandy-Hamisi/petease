import React from 'react'
import ProductCard from './productCard/ProductCard'
import { feedsData } from '@/lib/data'

const MarketPlace = () => {
  return (
    <div className='border-2 border-peteaseLightGrey rounded-lg p-4 bg-peteaseGrey text-peteaseBlue'>
      <div className='mb-4'>
        <h5 className='text-xs font-bold'>Today's Picks</h5>
      </div>

      {/* products */}
      <div className='flex flex-wrap items-center gap-12'>
        {
          feedsData.map((animalFeed) => (
            <ProductCard
              key={animalFeed.id}
              {...animalFeed}
            />
          ))
        }
      </div>
    </div>
  )
}

export default MarketPlace
