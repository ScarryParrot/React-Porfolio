import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {
    const Arr = [{
        id: 1,
        src: arrayDestruct,
    },
    {
        id: 2,
        src: installNode,
    },
    {
        id: 3,
        src: navbar,
    },
    {
        id: 4,
        src: reactParallax,
    },
    {
        id: 5,
        src: reactSmooth,
    },
    {
        id: 6,
        src: reactWeather,
    },
    ]
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 py-[20vh] w-full md:h-screen '>
            <div className="max-w-screen-lg py-4 flex flex-col mx-auto text-center font-semibold text-white ">
                <p className='text-3xl'>Portfolio</p>
                <p className='tetx-xl'>Check out Some here.</p>
            </div>

            <div className="pt-14 grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-6 sm:px-8 ">
                {Arr.map(({id,src}) => (
                    <div key={id} className="shadow-md shadow-gray-600 ">
                        <img src={src} className="rounded-md hover:scale-105 duration-200 px-4" alt="" />


                        <div className="text-white flex justify-between px-6 py-2">
                            <button>code</button>
                            <button>demo</button>
                        </div>
                    </div>
     

            ))}
            </div>
        </div>
    )
}

export default Portfolio
