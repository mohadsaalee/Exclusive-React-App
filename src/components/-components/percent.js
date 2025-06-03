import React from 'react'

export function GreenPercent() {
  return (
    <>
        <div className=' bg-[#00FF66] w-[51px] h-[26px] px-3 rounded-md absolute'>
            <span className=' text-white font-normal  text-xs'>New</span>
        </div>
    </>
  )
}


export function RedPercent() {
  return (
    <>
        <div className=' bg-[#DB4444] w-[51px] h-[26px] px-3 rounded-md absolute'>
            <span className=' text-white font-normal  text-xs'>-40%</span>
        </div>
    </>
  )
}

export function AddToCart (){
  return(
    <>
      <div className=' bg-black w-[270px] flex items-center justify-center p-2 rounded-sm'>
        <span className=' text-white font-[500] text-[13px]'>Add To Cart</span>
      </div>
    </>
  )

}


