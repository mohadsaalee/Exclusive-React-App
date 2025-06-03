import React from 'react'
import {product} from '../../utilities/static'
import { GreenPercent } from './percent'
import { RoundCar, RoundGamePad, RoundSoccer } from '../-components/Roundes'
import { AddToCart } from './percent'



const Grid = () =>{  
  return (
    <>
      <div className='grid grid-cols-4 gap-7 mt-16 place-items-center max-[1180px]:grid-cols-3
       max-[800px]:grid-cols-2 max-[540px]:grid-cols-1'>            
        {product.map((item,index)=>( 
                <div key={index} className='w-[270px] h-[322px] max-[540px]:w-[]'>
                    <div className='bg-[#F5F5F5] p-10 relative rounded-lg'>
                        <div className=' w-[190px] h-[180px] '>
                            <img src={item.image} alt='image'/>
                        </div>
                        <div className=' flex items-start justify-center  '>
                            {index === 1 && (
                                <div className=' absolute '>
                                    <AddToCart />
                                </div>
                            )}
                        </div>
                        <div className=' absolute  top-4 right-2'>
                            <img src={item.eye} alt='wachlist'/>   
                            <img src={item.heart} alt='icon'/>
                        </div> 
                        <div className=' absolute top-3 left-3'>
                            {[4,6].includes(index) && <GreenPercent/>}
                        </div>

                    </div>
                    
                    <div>
                    <div>
                        <h4  className=' text-[16px] text-[#000000] font-medium'>{item.title}</h4>
                    </div>
                    <div className=' flex items-center gap-1 leading-8 '>
                        <div ><p  className=' text-[#DB4444] tex-lg font-medium'>{item.price}</p></div>
                            <div>
                                <img src={item.star}/>
                            </div>
                            <div className=' text-[#000000] text-[14px] font-medium'>{item.rating}</div>
                        </div>
                        <div className=' mt-2 '>
                            {[4,16].includes(index) && <RoundCar/>}
                            {[5,17].includes(index) && <RoundSoccer/>}
                            {[6,7,18,19].includes(index) && <RoundGamePad/>}
                        </div>

                    </div>

                </div>
            ))}
        </div>
        <div className=' mt-16 mb-12'>
            <div>
                <div className=' bg-[#F5F5F5] h-1'></div>
            </div>
            
        </div>
    </>
  )
}

export default Grid;

