import React from 'react'
import { IoMdReturnRight } from "react-icons/io"; 

function Button({title = "Start a project"}) {
  return (
    <div className='px-2 py-2 gap-1 xl:max-w-40 xl:px-4 xl:py-2 xl:gap-2 bg-zinc-100 rounded-full text-black flex justify-between items-center'>
        <span className='text-[2vw] xl:text-sm font-black'>{title}</span>
        <IoMdReturnRight className='w-3 xl:w-5'/>
    </div>
  )
}

export default Button