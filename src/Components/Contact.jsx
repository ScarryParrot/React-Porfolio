import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen py-[40vh] bg-gradient-to-b from-black to-gray-800'>
      <div className="flex flex-col max-w-screen-lg mx-auto ">
      <div className=" text-white text-center">
        <p className='font-semibold text-3xl mb-4 underline'>Contact</p>
        <p className='font-semibold text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, natus?</p>
      </div>
      <div className="text-white my-4 ">
        <form action="https://formspree.io/f/xpznngok" method="POST" className='flex flex-col w-2/4 justify-center mx-auto'>
          <input required type="text" name="name"  className='bg-gray-800 text-white py-2   my-4  rounded' placeholder='name' />
          <input required type="email" name="email"  className='bg-gray-800 text-white py-2 my-4 rounded' placeholder='email' />
          <textarea name="textarea"cols="30" rows="10" className='bg-gray-800 text-white my-4 rounded' placeholder='Message here'></textarea>

          <button className='bg-blue-700  my-6 shadow-2xl shadow-gray-600 hover:bg-blue-800 hover:scale-105 duration-200 ease-out active:bg-blue-900'>Let's talk</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
