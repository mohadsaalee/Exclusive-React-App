import React, { useState } from 'react';
import { ProductData } from '../../utilities/static';

function Categories({setSelectedCategory}) {
  const catagorieTitle = [
    {
      id: 1,
      title: "phone",
      image: "/image/icons/Category-CellPhone.svg"
    },
    {
      id: 2,
      title: "computer",
      image: "/image/icons/Category-Computer.svg"
    },
    {
      id: 3,
      title: "smart watch",
      image: "/image/icons/Category-SmartWatch.svg"
    },
    {
      id: 4,
      title: "headphone",
      image: "/image/icons/Category-Headphone.svg"
    },
    {
      id: 5,
      title: "gaming",
      image: "/image/icons/Category-Gamepad.svg"
    },
    {
      id: 6,
      title: "cemara",
      image: "/image/icons/Group 1000005941.jpg"
    }
  ];

  const [items, setItems] = useState([]);

  const filterItems = (cat) => {
    const newItems = ProductData.filter((product) =>
      product.catagory === cat
    );
    setItems(newItems);
    setSelectedCategory(cat);
  };

  return (
    <>
        <div className='flex items-center gap-3 my-7'>
            <div className='w-[20px] h-[37px] bg-[#DB4444] rounded-md'></div>
            <h5 className='font-[600] text-[15px] text-[#DB4444]'>Categories</h5>
        </div>
        <div>
            <h3 className='font-[600] text-[36px]'>Browse By Category</h3>
        </div>

     {/*  */}

        <div className='grid grid-cols-6 gap-12 mt-4 max-[1170px]:grid-cols-4 max-[875px]:grid-cols-3 
           max-[610px]:grid-cols-2 max-[390px]:grid-cols-1 place-items-center'>
            {catagorieTitle.map((cat, index) => (
            <div
                className='border border-[#0000004D] w-[170px] h-[145px] flex flex-col items-center justify-center'
                key={index}
             >
                <button onClick={() => filterItems(cat.title)} className=' flex flex-col items-center justify-center'>
                    <div>
                        <img className='w-[56px] h-[56px]' src={cat.image} alt={cat.title} />
                    </div>
                    <div>
                        <h5 className='font-[400] text-[16px]'>{cat.title}</h5>
                    </div>
                </button>
            </div>
            ))}
        </div>

     {/*  */}
      <div className='mt-10 grid grid-cols-4 gap-6  '>
        {items.map((product) => (
            <div key={product.id} className=' p-4 rounded'>
                <div className='w-[270px] h-[322px]'>
                    <div className='bg-[#F5F5F5] p-10 relative rounded-lg'>
                        <div className='w-[190px] h-[180px]'>
                        <img src={product.image} alt={product.title} />
                        </div>
                        <div className='absolute top-4 right-2 flex flex-col gap-2'>
                            <img src={product.eye} alt='View Icon' />
                            <img src={product.heart} alt='Wishlist Icon' />
                        </div>
                    </div>
                    
                    <div>
                        <div className='text-[16px] text-[#000000] font-medium'>
                            {product.title}
                        </div>
                        <div className='flex items-center gap-1 leading-8'>
                            <div className='text-[#DB4444] text-[16px] font-medium'>
                                {product.price}
                            </div>
                            <div>
                                <img src={product.star} alt='Rating Star' />
                            </div>
                            <div className='text-[#000000] text-[14px] font-medium'>
                                {product.rating}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
