import React from 'react'

export function RoundCar (){
 return(
    <div className=' flex gap-1 '>
        <div class="w-[20px] h-[20px] rounded-full bg-white border-2
            border-black flex justify-center items-center">
            <div class="w-3 h-3 rounded-full bg-red-600"></div>
        </div>
        <div className=' w-[20px] h-[20px] rounded-xl bg-[#DB4444]'></div>
    </div>
 )
}

export function RoundSoccer (){
    return(
        <div className=' flex gap-1 '>
            <div class="w-[20px] h-[20px] rounded-full bg-white border-2
                border-black flex justify-center items-center">
                <div class="w-3 h-3 rounded-full bg-[#EEFF61]"></div>
            </div>
            <div className=' w-[20px] h-[20px] rounded-xl bg-[#DB4444]'></div>
        </div>
    )
}

export function RoundGamePad (){
    return(
        <div className=' flex gap-1'>
            <div class="w-[20px] h-[20px] rounded-full bg-white border-2
                border-black flex justify-center items-center">
                <div class="w-3 h-3 rounded-full bg-[#000000]"></div>
            </div>
            <div className=' w-[20px] h-[20px] rounded-xl bg-[#DB4444]'></div>
        </div>
    )
}