import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-[100vw] px-3 border-b-[1px] border-zinc-700 py-6 flex items-center justify-between xl:max-w-screen-xl xl:mx-auto ">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-6 xl:gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[1px] h-[7] bg-zinc-700"></span>
            ) : (
              <a key={index} className="text-sm flex items-center gap-1" href="#">
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-400 rounded-full"
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <div className="hidden xl:flex">
        
        <Button/>
      </div>
    </div>
  );
};

export default Navbar;
