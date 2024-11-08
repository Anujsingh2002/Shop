import React, { useEffect, useState } from 'react'
import lightbutton from '../../assets/lightbutton.png'
import darkbutton from '../../assets/darkbutton.png'

const DarkMode = () => {
  const [theme,setTheme] = useState(
    localStorage.getItem("theme")?localStorage.getItem("theme"):"light"
  )

  const element = document.documentElement;
  // console.log(element);
  useEffect(()=>{
    if(theme==='dark'){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }
    else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[theme])

  return (
    <div className="relative">
      <img src={lightbutton} alt=""
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
         transition-all duration-300  right-0 z-10 absolute ${theme==="dark"?'opacity-0':'opacity-100'}`}
         onClick={()=>{setTheme(theme==='light'?"dark":"light")}}
      />

      <img src={darkbutton} alt=""
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
         transition-all duration-300 ${theme==="light"?'opacity-0':'opacity-100'}`}
         onClick={()=>{setTheme(theme==='light'?"dark":"light")}}
      />
    </div>
  )
}

export default DarkMode