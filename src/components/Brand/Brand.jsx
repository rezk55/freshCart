import React from 'react'

export default function Brand({item}) {
    return (
        <>
          <div className='p-2'>
                <img src={item.image} height={150} className='w-100' alt=''/>
                {/* <h5 className='text-center fw-bolder'>{item.name}</h5> */}
          </div>
        </>
      )
}
