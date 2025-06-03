import React from 'react'
import { MdSend } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { footerData } from '../../utilities/static';

function Footer() {
  return (
    <>
    <div className='bg-black w-[100%] max-[1440px] py-[80px] px-4 md:px-6 lg:px-8'>
        <div className='wrapper'>
            <div className=' grid grid-cols-6 gap-10 justify-items-center max-[1080px]:grid-cols-4 
               max-[768px]:grid-cols-3 max-[540px]:grid-cols-2  max-[360px]:grid-cols-1 '>
                {footerData.map((item,index)=>(
                    <div key={index} className='mb- md:mb-0'>
                        <div>
                            <h5 className='text-[#fff] text-xl md:text-[20px] font-medium mb-10'>{item.title}</h5>    
                        </div>
                        
                        {item.list.map((list,index) =>(
                            <div key={index}>
                                <p className='text-[#fff] font-normal text-sm md:text-[16px] mb-5 max-[540px]:text-[15px]  '>{list}</p>
                            </div>
                        ))}
                        {item.id === 1 ? <div className=' text-white flex items-center border border-solid-1px rounded-sm w-[271]px px-3 '>
                        <input className=' border-white bg-transparent w-[100%] h-[48px] text-[14px] '
                            placeholder='Enter Your Email'/>
                           <MdSend size={25}/>
                        </div> : ""}


                    </div>
                     
                    
                ))}
                

                <div className='col-span-1 md:col-span-2 lg:col-span-1 '>
                    <div className='mb-4'><h5 className='text-[#fff] text-[20px] md:text-[24px] font-medium max-[540px]:text-[15px] '>Download App</h5></div>
                    <span className='text-[#fff] text-[14px] md:text-[16px] block mb-4 max-[540px]:w-[100px] max-[540px]:text-[10px]'>Save $3 with App New User Only</span>
                    <div className='flex items-center gap-4 mb-6 max-[540px]:w-[110px]'>
                        <dvi>
                            <img src='/image/icons/Qrcode 1.svg' alt="QR Code" className='w-24 h-24'/>
                        </dvi>
                        <div className='flex flex-col gap-2 '>
                            <img src='/image/icons/play.png' alt="Play Store" className='w-32'/>
                            <img src='/image/icons/apple.png' alt="App Store" className='w-32'/>
                        </div>
                    </div>
                    <div>
                       <ul className='text-[#fff] flex items gap-10 max-[540px]:gap-4'>
                        <li className='text-xl'><FaFacebook/></li>
                        <li className='text-xl'><FaLinkedin/></li>
                        <li className='text-xl'><CiTwitter/></li>
                        <li className='text-xl'><FaInstagram/></li>
                       </ul>
                    </div>
                </div>    
            </div>
                <div className=' flex items-center  gap-1 w-full justify-center mt-5 max-[540px]:hidden '>
                    <div className=' text-[#3d3d3d] '>
                        <span className=' text-[#3d3d3d] font-[400] text-[16px]  '>Copyright Rimel 2022. All right reserved</span>
                    </div>
                </div> 

        </div>
    </div>  
    </>
  )
}

export default Footer
    