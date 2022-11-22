import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll'
export default function Navbar() {
    const [nav, setNav] = useState(true)
    return (
        <div className='z-100'>
            <div className=" bg-black h-20 w-full flex justify-between items-center fixed px-4 text-white ">
                <p className='font-signature text-5xl ml-2'>Ayush</p>
                <ul className=' text-gray-400 hidden md:flex row '>
                    <li className='cursor-pointer mr-6 capitalize hover:scale-110 transition ease-in-out duration-150'><Link  to='home' smooth duration={1000}>Home</Link></li>
                    <li className='cursor-pointer mr-6 capitalize hover:scale-110 transition ease-in-out duration-150'><Link  to='about' smooth duration={1000}>About</Link></li>
                    <li className='cursor-pointer mr-6 capitalize hover:scale-110 transition ease-in-out duration-150'><Link  to='portfolio' smooth duration={1000}>Portfolio</Link></li>
                    <li className='cursor-pointer mr-6 capitalize hover:scale-110 transition ease-in-out duration-150'><Link  to='experience' smooth duration={1000}>Experience</Link></li>
                    <li className='cursor-pointer mr-6 capitalize hover:scale-110 transition ease-in-out duration-150'><Link  to='contact' smooth duration={1000}>Contact</Link></li>
                    
                </ul>

                <div  onClick={() => { setNav(!nav) }} className="z-10 pr-4 md:hidden text-gray-400">
                    {nav ? <FaBars size={25} /> : <FaTimes size={25} />}

                </div>
                {!nav &&
                    <ul className=' text-gray-400 flex-col text-4xl absolute top-0 justify-center items-center right-0 bg-gradient-to-b from-black to-gray-800 opacity-95 w-3/4 h-screen flex '>
                        <li className='cursor-pointer pt-6 capitalize hover:scale-110 transition ease-in-out duration-150'><Link to='home'  smooth duration={1000}>Home</Link></li>
                        <li className='cursor-pointer pt-6 capitalize hover:scale-110 transition ease-in-out duration-150'><Link to='about' smooth duration={1000}>About</Link></li>
                        <li className='cursor-pointer pt-6 capitalize hover:scale-110 transition ease-in-out duration-150'><Link to='portfolio' smooth duration={1000}>Portfolio</Link></li>
                        <li className='cursor-pointer pt-6 capitalize hover:scale-110 transition ease-in-out duration-150'><Link  to='experience' smooth duration={1000}>Experience</Link></li>
                        <li className='cursor-pointer pt-6 capitalize hover:scale-110 transition ease-in-out duration-150'><Link to='contact' smooth duration={1000}>Contact</Link></li>
                    </ul>
                }
            </div>
        </div>
    )
}
