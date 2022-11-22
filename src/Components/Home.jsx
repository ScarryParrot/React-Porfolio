import React from 'react'
import heroImage from "../assets/hero.JPG"
import { RiArrowDropRightLine,RiArrowDropDownLine } from "react-icons/ri"
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className="text-white h-screen  bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className="  max-w-screen-lg pt-[20vh] justify-center items-center  flex mx-auto flex-col md:flex-row  space-x-10 ">

        <div className="w-full px-4 ">

          <h2 className="text-blue-500 text-5xl mb-4 ">
            I'm a Full Stack Developer
          </h2>
          <p className='text-2xl leading-[5.5vh]  mb-4'> I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.</p>

          <div className="group">
            <button className='cursor-pointer bg-gradient-to-r from-cyan-700 to-blue-700 rounded px-3   flex items-center'>
              <p className='capitalize font-semibold text-xl '><Link smooth duration={1000} to='portfolio'>Portfolio</Link>  </p>  
              <span className='group-hover:rotate-90 duration-300'><RiArrowDropRightLine size={30} /></span>
            </button>
          </div>
          
        </div>
        <div className="mt-[15vh]">
            <img className='w-2/3 border-4 md:w-2/3 md:mb-8 sm:w-10 ' src={heroImage}  alt="" />
          </div>

      </div>
    </div>
  )
}

export default Home
