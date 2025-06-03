import React from 'react'
import { TiArrowRight } from "react-icons/ti";
import { Link } from 'react-router-dom';


function SpotLight() {
  return (
   <>
   <div className=' mt-5' >
        <div className=' bg-black h-[453px] flex items-center 
         justify-around rounded-md w-[100%]   '>
            <div className=' grid  gap-5 ml-4  '>
                <div className=' flex items-center gap-5  '>
                    <img src='/image/icons/1200px-Apple_gray_logo 1.png' alt='apple icon'></img>
                    <span className=' text-white   max-[540px]:text-[15px]'>iPhone 14 Series</span>
                </div>
                <div className=' w-[290px]  '>
                    <h3 className='  text-[#fff] text-[48px] max-[980px]:text-[25px] 
                     max-[786px]:text-[30px] '>Up to 10% off Voucher</h3>  
                </div>
                <div>
                    <Link>
                        <span className='flex items-center gap-2 text-white underline underline-offset-8'>Shop Now <TiArrowRight size={30}/>
                        </span>
                    </Link>
                </div>
            </div>
            <div  >
                <div className=' max-[480px]:hidden' >
                    <img src='/image/iphonemain.png' alt='image'/>
                </div>
            </div>
        </div>
   </div>
   
   </>
  )
}

export default SpotLight
