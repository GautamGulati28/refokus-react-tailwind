import React from "react";
import { GoArrowRight } from "react-icons/go";

function Card({ width, start, para, hover,topPara,topHead}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl flex flex-col gap-56 ${width} ${hover} transition-all duration-300 ease-in-out
`}>
      <div className="w-full">
        <div className="w-full flex items-center justify-between mb-5">
          <h3>{topPara}</h3>
          <GoArrowRight />
        </div>
        <h1 className="text-3xl font-semibold">{topHead}</h1>
      </div>
      <div className="w-full">
        {para === true ? (
          <>
            <h1 className="text-7xl font-black tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="mt-8 max-w-[7.5vw] rounded-full py-2 px-4 border-[1px] border-zinc-200">
              Contact Us
            </button>
          </>
        ) : null}
        {start === true ? (
          <>
            <p className="font-light text-[0.8vw] text-zinc-600 mt-32">
              Explore what drives our team.
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
