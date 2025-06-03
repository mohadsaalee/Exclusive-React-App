import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';

function Hamberger({ headerTitle }) {
  const [open, setOpen] = useState(false);
  

  return (
    <div>
      <Hamburger 
        size={20}
        toggle={setOpen}
        toggled={open}
      />

      {open && (
        <div  className=" bg-gray-50 w-[250px] h-[350px] absolute left-10 rounded-lg">
          <ul className=' grid grid-flow-row gap-5 mt-[100px]  justify-center '>
            {headerTitle.map((item, index) => (
              <li key={index} className="font-[400] text-[16px]">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Hamberger;
