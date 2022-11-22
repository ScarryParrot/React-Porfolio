
import {BsGithub} from "react-icons/bs"
import {AiFillLinkedin,AiFillMail} from "react-icons/ai"
import {IoIosContact} from "react-icons/io"


const Sociallinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul className='py-4 '>
            <li className='text-white px-2 py-2 w-40 -ml-[100px] hover:ml-[0px] duration-200'> <a target="_blank" rel="noreferrer"  href="https://github.com/" className='w-full flex items-center  justify-between px-4 '>Github <BsGithub size={30}/></a> </li>
            <li className='text-white px-2 py-2 w-40 -ml-[100px] hover:ml-[0px] duration-200'> <a target="_blank" rel="noreferrer"   href="https://www.linkedin.com/" className='w-full flex items-center  justify-between px-4 '> LinkedIn <AiFillLinkedin size={30}/></a></li>
            <li className='text-white px-2 py-2 w-40 -ml-[100px] hover:ml-[0px] duration-200'> <a target="_blank" rel="noreferrer" href="mailto:ayush17prajapati@gmail.com"   className='w-full flex items-center  justify-between px-4 '>Mail <AiFillMail size={30}/></a> </li>
            <li className='text-white px-2 py-2 w-40 -ml-[100px] hover:ml-[0px] duration-200'> <a download={true} target="_blank" rel="noreferrer" href="icon.JPG" className='w-full flex items-center  justify-between px-4 '>Conatct <IoIosContact size={30}/></a> </li>
        </ul> 
    </div>
  )
}

export default Sociallinks
