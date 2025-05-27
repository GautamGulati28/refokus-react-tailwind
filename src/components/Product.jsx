import React from "react";
import Button from "./Button";

function Product({ val,mover,count }) {
  
  return (
    <div className={`w-full xl:py-20 h-[20vh] xl:h-[23rem] text-white items-center justify-center ${val.color} transition-colors duration-300 ease-in-out `}>
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center rounded-2xl justify-between ">
        <h1 className="text-3xl pl-3 xl:pl-0 xl:text-6xl font-black capitalize">{val.title}</h1>
        <div className="dets pl-10 w-2/3 xl:pl-0 xl:w-1/3">
          <p className="mb-3 text-[3vw] xl:text-[1vw] pr-2 xl:mb-10">{val.description}</p>
          <div className="button-container flex gap-2 xl:gap-3.5">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
