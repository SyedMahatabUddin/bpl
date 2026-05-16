import React from 'react';
import BannerImg from '../../assets/banner-main.png'
import BannerBg from '../../assets/bg-shadow.png'

const Banner = () => {
     return (
<div style={{
          backgroundImage:`url(${BannerBg})`,
          backgroundSize:`cover`,
          backgroundRepeat:`no-repeat`,
          backgroundPosition:`center`,
          backgroundColor:`#131313`
}} className="w-full container mx-auto py-10 lg:rounded-2xl h-[60vh] items-center flex flex-col space-y-4 justify-center">
  <img src={BannerImg} alt="Banner image " className=' min-h-[50px]' />
  <h1 className='text-2xl lg:text-4xl text-center text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>

  <p className='text-[#FFFFFF70]'>Beyond Boundaries Beyond Limits</p>
  <div className='p-1 border border-[#E7FE29] rounded'>
          <button className="btn bg-[#E7FE29] text-[#131313] font-bold border-none
          ">Claim Free Credit</button>
  </div>
</div>
     );
};

export default Banner;