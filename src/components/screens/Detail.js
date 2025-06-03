import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductData } from '../../utilities/static';
import Related from '../-components/Related';
import { Link } from 'react-router-dom';



function Detail() {
  const { id } = useParams();
  const parsedId = parseInt(id)
  const item = ProductData.find(product => product.id === parsedId)

  const Return = [
    {
        id : 1,
        icon : "/image/icons/icon-delivery.svg",
        title : "Free Delivery",
        describe : "Enter your postal code for Delivery Availability"

    },
    {
        id : 2,
        icon : "/image/icons/Icon-return.svg",
        title : "Return Delivery",
        describe : "Free 30 Days Delivery Returns. Details"
    }
 ]

  return (
    
    <>  
        <div className=' flex gap-3 my-12 items-center '>
            <div>
                <Link to="/">
                    <h6 className=' text-[14px] text-[#aea8a8] hover:underline '>Home</h6>
                </Link>
            </div>
            <div className=' text-[#aea8a8] '>/</div>
            <div>
                <Link to='/product'>
                    <h6 className='  text-[14px] text-[#aea8a8] hover:underline'>Products</h6>
                </Link>
            </div>
            <div className=' text-[#aea8a8] '>/</div>
            <div>
                <Link to="">
                   <h6 className='  text-[14px] text-[#000000] max-[320px]:text-sm'>{item.title}</h6> 
                </Link>
            </div>
        </div>
        {/*  */}
        <div>
            <div className=' flex items-center gap-8 max-[768px]:flex-wrap max-[768px]:justify-center  '>
                <div className=' w-[700px] h-[600px] bg-[#F5F5F5] my-2 flex items-center justify-center
                 max-[1280px]:w-[600px]  max-[1080px]:w-[400px] max-[768px]:w-[700px]  max-[420px]:h-[350px] max-[420px]:w-[350px]' >
                    <div className=' w-[300px] max-[420px]:w-[200px]   '>
                        <img className=' w-[100%] ' src={item.image} alt={item.alt}/>
                    </div>
                </div>
                <div className=' mb-2 w-[700px] max-[320px]:w-[400px] '>
                    <div>
                        <h2 className=' max-[1080px]:text-[30px] max-[420px]:text-[23px] max-[320px]:text-[23px]'>{item.title}</h2> 
                    </div>
                    <div className=' max-[1080px]:w-[400px] max-[768px]:w-[100%] max-[420px]:w-[100%] max-[320px]:w-[100%]'>
                        <div className=' '>
                            <div className='mb-2 flex gap-4'>
                                <div> 
                                    <img src={item.star}  alt={item.alt}/>
                                </div>
                                
                                <div>  
                                    {item.rating}
                                </div>
                                <div className=' text-gray-300'>|</div>
                                <div className=' text-green-400'>
                                    <h6>In stock</h6>
                                </div>
                            </div>
                            <div className=' mb-3 text-black font-normal text-3xl'>
                                {item.price}.00
                            </div>
                            <div className=' mb-4 w-[375px] max-[360px]:w-[340px] max-[320px]:w-[300px]'>
                                <span className=' font-[400] text-sm  max-[420px]:text-[15px] 
                                 max-[360px]:text-[15px] max-[320px]:text-[12px]'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble 
                                    free install & mess free removal Pressure sensitive.
                                </span>
                            </div>
                        </div>

                        <hr className=' border-t border-black mb-3 max-[320px]:w-[298px]'/>
                        
                        <div >
                            <div className=' flex items-center gap-4 mb-3'>
                                <h5 className=' font-[400] text-lg'>Colours :</h5>
                                <div className=' flex gap-1'>
                                    <div class="w-[20px] h-[20px] rounded-full bg-white border-2
                                        border-black flex justify-center items-center">
                                        <div class="w-3 h-3 rounded-full border bg-[#A0BCE0]"></div>
                                    </div>
                                    <div className=' w-[20px] h-[20px] border bg-[#E07575] rounded-full'> </div>
                                </div>
                            </div>
                        </div>
                        {/* free delivery */}
                        <div className=' border-2 border-gray-500 rounded divide-y-2 divide-[#7f7f7f] max-[360px]:w-[300px] '>
                            {Return.map((item,index) => (
                                <div key={index}>
                                    <div className=' flex items-center ml-8 gap-4 py-5 '>
                                        <div className=' w-[40px] max-[360px]:w-[30px] '>
                                            <img src={item.icon}  alt={item.alt}/>
                                        </div>
                                        <div>
                                            <h6>{item.title}</h6>
                                            <span className=' text-xs font-[200px] underline'>{item.describe}</span>
                                        </div>
                                    </div>                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='flex items-center gap-3 my-14'>
                <div className='w-[20px] h-[37px] bg-[#DB4444] rounded-md'></div>
                <h5 className='font-[600] text-[15px] text-[#DB4444]'>Related Item</h5>
            </div>
            {/*  */}
            <div >
                <Related/>
            </div>
        </div> 
    </>
  );
}

export default Detail;