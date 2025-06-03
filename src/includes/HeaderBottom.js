import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { BiCartAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Hamberger from '../components/-components/Hamberger';


function HeaderBottom() {

  const [isactive, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);  

  const headerTitle = [
    { title: "Home", id: "1" },
    { title: "Contact", id: "2" },
    { title: "About", id: "3" },
    { title: "Sign Up", id: "4" }
  ];

  return (
    <>
      <div className='wrapper'>
        <div className='flex items-center justify-between mt-8 mb-2'>
            <button 
                className="hidden max-[980px]:block text-[24px] font-bold"
                >
                   <Hamberger headerTitle={headerTitle} />
            </button>
            <div>
                <h1 className='font-[700] text-[24px]'>
                <Link to="/">Exclusive</Link>
                </h1>
            </div>
            {/*  */}
            <div className=' max-[980px]:hidden  '>
                <ul className={`flex-row  gap-10 ${isOpen ? 'flex' : 'hidden'} md:flex`}>    
                    {headerTitle.map((item, index) => (
                        <li key={index} className='font-[400] text-[16px]'>
                            <button 
                                onClick={() => setActive(index)}
                                className={` ${isactive === index ? 'border-b-2   border-black' : ''}`}>
                                {item.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {/*  */}
            <div>
                <div className='flex items-center gap-6'>
                    <div className='p-[10px] flex bg-[#F5F5F5] items-center rounded-md  '>
                        <input 
                        className='outline-none border-none bg-[#F5F5F5]
                         text-[12px] font-semibold flex items-center w-[243px] max-[480px]:w-[1px] '
                        placeholder='What are you looking for?'
                        />
                        < IoSearchSharp size={25} />
                    </div>
                    <div className='flex items-center gap-5 max-[920px]:hidden'>
                        <GoHeart size={25} />
                        <BiCartAlt size={25} />
                    </div>
                </div>
          </div>
        </div>
      </div>
      <div className='bg-[#F5F5F5] h-1'></div>
    </>
  )
}

export default HeaderBottom
