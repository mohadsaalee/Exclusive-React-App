import React from 'react';
import {  ProductData } from '../../utilities/static';
import { AddToCart } from './percent';
import { RedPercent } from './percent';


function Related() {
    const allowedIds = [9,10,11,12];
  return (
    <>
        <div className=' grid grid-cols-4 gap-7  my-14 w-[1,170px]  max-[1180px]:grid-cols-3  
            place-items-center h-full max-[980px]:grid-cols-2 max-[540px]:grid-cols-1'>
            {ProductData.filter(product => allowedIds.includes(product.id))
            .map((product,index) =>(
                <div key={index} className='w-[270px] h-[322px]'>
                <div className='bg-[#F5F5F5] p-10 relative rounded-lg'>
                    <div className=' w-[190px] h-[180px]'>
                        <img src={product.image} alt='image'/>
                    </div>
                    <div className=' flex items-start justify-center  '>
                        {index === 1 && (
                            <div className=' absolute '>
                                <AddToCart />
                            </div>
                        )}
                    </div>
                    <div className=' absolute  top-4 right-2'>
                        <img src={product.eye} alt='wachlist'/>   
                        <img src={product.heart} alt='icon'/>
                    </div> 
                    <div className=' absolute top-3 left-3'>
                        {[0,1,2].includes(index) && <RedPercent/>}
                    </div>
                </div>
                <div className=' text-[16px] text-[#000000] font-medium'>
                    {product.title}
                </div>
                <div>{product.price}</div>
                <div className=' flex items-center gap-1 leading-8'>
                    <div className=' text-[#DB4444] text-[16px] font-medium flex items-center' >
                        <div>
                            <img src={product.star} alt="image"/>
                        </div>
                        <div className=' text-[#000000] text-[14px] font-medium'>
                            {product.rating}
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default Related
