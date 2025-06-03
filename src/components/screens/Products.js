import React from 'react'
import { ProductData } from '../../utilities/static'
import { Link } from 'react-router-dom'
import { GreenPercent  } from '../-components/percent'
import { RoundCar, RoundGamePad, RoundSoccer } from '../-components/Roundes'
import { AddToCart } from '../-components/percent'


function products() {
  return (
    <>    
        <div className=' flex gap-3 my-12 items-center'>
            <div>
                <Link to='/'>
                    <h6 className=' text-[14px] text-[#aea8a8] font-normal'>Home</h6>
                </Link>
            </div>
            <div className=' text-[#aea8a8] '>/</div>
            <div>
                <Link to='/product'>
                    <h6 className='  text-[14px] text-[#000000]'>Products</h6>
                
                </Link>
            </div>
        </div>
    
        <div className='grid grid-cols-4 gap-7 my-16  place-items-center
         max-[1180px]:grid-cols-3 max-[800px]:grid-cols-2 max-[540px]:grid-cols-1'>
            {ProductData.map((item, index) => (
                <div key={index} className='mt-6'>
                    <Link to={`/detail/${item.id}`}>
                        <div className='w-[270px] h-[322px]'>
                            <div className='bg-[#F5F5F5] p-10 relative rounded-lg'>
                                <div className='w-[190px] h-[180px]'>
                                    <img src={item.image} alt={item.title} />
                                </div>        
                                <div className=' flex items-start justify-center  '>
                                    {index === 9 && (
                                        <div className=' absolute  '>
                                            <AddToCart />
                                        </div>
                                    )}
                                </div>                       
                                <div className='absolute top-4 right-2 flex flex-col gap-2'>
                                    <img src={item.eye} alt='View Icon' />
                                    <img src={item.heart} alt='Wishlist Icon' />
                                </div>
                                <div className=' absolute top-3 left-3'>
                                    {[4,7,16,18].includes(index) && <GreenPercent/>}
                                </div>
                                {item.percentage ?                                 <div className=' absolute top-3 left-3'>
                                    <div className=' bg-[#DB4444] w-[51px] h-[26px] px-3 rounded-md absolute'>
                                        <span className=' text-white font-normal  text-xs'>{item.percentage}</span>
                                    </div>
                                </div> : " "}

                            </div>
                            <div>
                                <div className='text-[16px] text-[#000000] font-medium'>
                                    {item.title}
                                </div>
                                <div className='flex items-center gap-1 leading-8'>
                                    <div className='text-[#DB4444] text-[16px] font-medium'>
                                        {item.price}
                                    </div>
                                    <div>
                                        <img src={item.star} alt='Rating Star' />
                                    </div>
                                    <div className='text-[#000000] text-[14px] font-medium'>
                                        {item.rating}
                                    </div>
                                </div>
                                <div className=' mt-1'>
                                    {[4,16].includes(index) && <RoundCar/>}
                                    {[5,17].includes(index) && <RoundSoccer/>}
                                    {[6,7,18,19].includes(index) && <RoundGamePad/>}
                                </div>
                            </div>
                            
                        </div>
                        
                    </Link>
                </div>
            ))}
        </div>
        {/*  */}



      
    </>
  )
}

export default products
