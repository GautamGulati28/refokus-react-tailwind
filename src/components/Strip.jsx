import React from 'react'

function Strip({val}) {
  return (
    <div className='w-[16.66%] px-6 py-5 border-t-1 border-b-1 border-r-1 border-zinc-600 flex justify-between items-center'>
        <img src={val.url} alt="" />
        <span className='font-bold'>{val.number}</span>
    </div>
  )
}

export default Strip