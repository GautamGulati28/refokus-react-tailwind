import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-2'>
            <Card width={"w-[35%]"} start={true} para={false} topPara={"Up Next: Culture"} topHead={"Who we are"} hover={"hover:p-7"}/>
            <Card width = {"w-[65%]"} start={false} para={true} topPara={"Get In Touch"} topHead={<>Let's go to it,<br></br>together.</>} hover={"hover:bg-violet-600"} />
        </div>
    </div>
  )
}

export default Cards