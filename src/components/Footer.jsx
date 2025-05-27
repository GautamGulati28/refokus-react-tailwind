import React from "react";

function Footer() {
  return (
    <div className="w-full px-2 pb-3 xl:pb-0 xl:px-0">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-5 xl:gap-28">
        <div className="basis-1/4 xl:basis-1/2">
          <h1 className="text-[7vw] xl:text-[11vw] font-black leading-none tracking-[-0.0190em]">
            refokus.
          </h1>
        </div>
        <div className="basis-3/4 xl:basis-1/2 flex gap-1 xl:gap-4">
          <div className="basis-1/3 text-[3vw] xl:text-[1vw]">
            <h4 className="text-zinc-600 xl:mb-10 xl:mt-8 capitalize">Socials</h4>
            {["Instagram", "Twitter(X?)", "LinkedIn"].map((item, index) => (
              <a className="block mt-3 text-zinc-600 capitalize">{item}</a>
            ))}
          </div>
          <div className="basis-1/3 text-[3vw] xl:text-[1vw]">
            <h4 className="text-zinc-500 xl:mb-10 xl:mt-8 capitalize">Sitemap</h4>
            {["Home", "Work", "Carrers","contact"].map((item, index) => (
              <a className="block mt-3 text-zinc-200 capitalize">{item}</a>
            ))}
          </div>
          <div className="basis-1/2 xl:mt-8 flex flex-col items-end text-[3vw] xl:text-[1vw]">
            <p className="text-right">Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
            <img className="w-20 xl:w-32 mt-12" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
          </div>

        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex xl:gap-14 text-zinc-500 capitalize font-extralight text-[3vw] xl:text-[0.8vw] gap-6 xl:gap-0 xl:pl-[0.5vw] pb-5">
        {["Privacy Policy","Cookie Policy","impressum","terms"].map((items,index)=><a key={index}>{items}</a>)}
      </div>
    </div>
  );
}

export default Footer;
