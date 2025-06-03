import React from 'react'
import { delivery } from '../../utilities/static'
import { Link } from 'react-router-dom';


export function Delivery() {
  return (
   <>
    <div className=' flex items-center justify-center mt-4'>
        <Link to={"/product"}>
            <div className=' w-[234px] h-[56px] bg-[#DB4444] flex items-center justify-center rounded-sm'>
                <button className=' text-[#fff] text-[16px] font-bold'>View All Products</button>
            </div>
        </Link>
    </div>
    <div className=' grid grid-cols-3  place-content-center gap-24 my-40 max-[640px]:grid-cols-2 max-[480px]:grid-cols-1'>
        {delivery.map((item,index)=> (
            <div key={index} className=' flex flex-col items-center text-center'>
                <div className=' mb-3'>
                    <img src={item.image}/>
                </div>
                <div><h4 className=' font-semibold text-lg mb-1'>{item.title}</h4></div>
                <div><h5 className=' text-sm font-normal'>{item.discribe}</h5></div>
            </div>
        ))}
     </div>
   </>
  )
}


