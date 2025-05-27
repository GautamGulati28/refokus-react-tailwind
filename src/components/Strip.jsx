import React from 'react'

function Strip({val}) {
  return (
    <div className='w-[16.66%] min-h-[6vh] px-2 xl:min-h-[10vh] xl:px-6 xl:py-5 border-t-1 border-b-1 border-r-1 border-zinc-600 flex justify-between items-center'>
        <img className='' src={val.url} alt="" />
        <span className='font-bold hidden xl:flex'>{val.number}</span>
    </div>
  )
}

export default Strip