import React from 'react';
import DollarSvg from '../../assets/dollar 1.svg'

const Navbar = ({coin}) => {
          return (
            <div className='mb-1.5'>
   <div className="navbar container mx-auto ">
  <div className="flex-1">
   <img src="./src/assets/logo.png" alt="" />
  </div>
  <div className="flex gap-8">
    <ul className='text-[#1313137a] flex items-center gap-8 font-medium'>
      <li className='cursor-pointer '>Home</li>
      <li className='cursor-pointer '>Fixture</li>
      <li className='cursor-pointer '>Teams</li>
      <li className='cursor-pointer '>Schedules</li>
    </ul>


    <button className="btn btn-squre border border-gray-200 rounded-2xl btn-ghost flex justify-center space-between gap-2 font-bold text-xl" > {coin} coins
      <img src={DollarSvg} className=""></img>
    </button>
  </div>
</div>
<hr className='border-base-300' />
            </div>
          );
};

export default Navbar;