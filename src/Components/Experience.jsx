import React from 'react'
import css from '../assets/experience/css.png'
import github from '../assets/experience/github.png'
import graphql from '../assets/experience/graphql.png'
import html from '../assets/experience/html.png'
import javascript from '../assets/experience/javascript.png'
import nextjs from '../assets/experience/nextjs.png'
import node from '../assets/experience/node.png'
import react from '../assets/experience/react.png'
import tailwind from '../assets/experience/tailwind.png'


const Experience = () => {
    const Arr=[
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "border-b-4 border-orange-500",
          },
          {
            id: 2,
            src: css,
            title: "CSS",
            style: "border-b-4 border-blue-500",
          },
          {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "border-b-4 border-yellow-500",
          },
          {
            id: 4,
            src: react,
            title: "React",
            style: "border-b-4 border-blue-600",
          },
          {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "border-b-4 border-sky-400",
          },
          {
            id: 6,
            src: nextjs,
            title: "Next JS",
            style: "border-b-4 border-white",
          },
          {
            id: 7,
            src: graphql,
            title: "GraphQL",
            style: "border-b-4 border-pink-400",
          },
          {
            id: 8,
            src: github,
            title: "GitHub",
            style: "border-b-4 border-gray-400",
          },
          {
            id: 8,
            src: node,
            title: "Node",
            style: "border-b-4 border-gray-400",
          },
]

  return (
    <div name="experience" className='bg-gradient-to-b to-black from-gray-800 py-[50vh]'>
      <div className="h-screen">
        <div className="text-center text-white">
            <p className='font-semibold text-3xl underline'>Experience</p>
            <br />
            <p className='text-xl '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, autem.</p>
        </div>
        <div className="pt-20  grid sm:grid-cols-1   md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {Arr.map((({id,src,title,style})=>(
                
                 <div key={id} className=" flex cursor-pointer flex-col py-6 justify-center items-center text-white">
                <img src={src} className={` items-center  border-b-4 border-inner  ${style}  hover:scale-110 duration-200  w-20 pb-4`} alt="" />
                <p>{title}</p>
            </div>
            )))

            }
           
        </div>
      </div>
    </div>
  )
}

export default Experience
