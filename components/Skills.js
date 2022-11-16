import React from 'react'

function Skills({tech,lvl,stack}) {
  return (
    <div className="group relative flex cursor-pointer">
    <img
      className="rounded-full border-[2px] border-[#ff713e]/80
      object-cover p-2 w-20 h-20 md:w-22 md:h-22 xl:w-24 xl:h-24
      filter group-hover:grayscale grayscale-0 
      transition duration-400 ease-in-out group-hover:animate-bounce"
      src={tech}
      alt=""
    />
    <div className="absolute rounded-full 
    h-20 w-20 md:w-22 md:h-22 xl:w-24 xl:h-24 
    opacity-0 group-hover:opacity-100 group-hover:bg-[#000]/10 z-0
    transition duration-400 ease-in-out group-hover:animate-bounce">
      <div className="flex items-center justify-center h-full">
        <p className="text-2xl font-bold text-[#ff7032] opacity-100">{lvl}</p>
      </div>
      <p className="text-bold text-center my-2 text-[#ff7032]">{stack}</p>
    </div>
   
  </div>
  )
}

export default Skills
