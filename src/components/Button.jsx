import React from 'react'
import { IoMdReturnRight } from "react-icons/io5";
function Button({title = "Start a project"}) {
  return (
    <div className='max-w-40 px-4 py-2 gap-2 bg-zinc-100 rounded-full text-black flex justify-between items-center'>
        <span className='text-sm font-black'>{title}</span>
        <IoMdReturnRight />
    </div>
  )
}

export default Button