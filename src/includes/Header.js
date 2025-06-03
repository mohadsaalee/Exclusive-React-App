import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <div className='wrapper'>
            <div className='  flex justify-center items-center'>
                <div className=' flex gap-2'>
                    <div>
                        <p className='header-text font-normal text-base 
                         max-[980px]:absolute left-[50px]  md:text-[10px] sm:text-[5px] max-[640px]:hidden '>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </p>
                    </div>
                    <div>
                       <button className='shop-now-btn font-semibold text-small  bg-black max-[980px]:hidden'>Shop now</button>
                    </div>
                </div>               

                <div className=' '>
                    <div className=' language-selector max-[980px]:mt-3 '>
                        <select className='bg-black text-white outline-none font-thin
                         text-sm absolute right-[50px] max-[480px]:mb-1  '>
                            <option>Englih</option>
                            <option>Malayalam</option>
                            <option>Hindi</option>
                            <option>Spanish</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;
