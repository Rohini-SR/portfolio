import React from "react";
import { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'


export const Header = () => {
  const [menubar,setMenuBar] = useState(false)
  return (
    <header className=" bg-primary flex justify-between  p-2 font-intro-font" >
      <a href="#" className="font-bold text-black">Rohini Subramanian</a>
        <nav className="hidden md:block">
          <ul className="flex">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Resume</a></li>
        </ul>
        </nav>
        {menubar && <nav className="block md:hidden ">
          <ul className="flex flex-col mobile-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Resume</a></li>
        </ul>
        </nav>}
        <button onClick={()=>setMenuBar(!menubar)} className="block md:hidden"><Bars3Icon className="text-white h-5"/></button>
    </header>
  );
};