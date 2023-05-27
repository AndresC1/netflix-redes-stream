// import React from 'react'
// import {} from '';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Navbar() {
  return (
    <div className="bg-black w-full h-20 flex justify-between items-center px-8 shadow-sm shadow-zinc-700">
        <img src='https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-6-1024x576.png' alt="Netflix" className="h-[95%]" />
        <div className="relative mr-10">
            <div className="absolute pointer-events-none">
            <AiOutlineSearch className='absolute text-slate-400 h-5 w-5 ml-4 mt-4'/>
            </div>
            <input className="w-full h-12 rounded-md bg-[#222] px-14" placeholder="Buscar" type="text" />
        </div>
    </div>
  )
}
