import React from 'react';

const Footer = () => {
     return (
      <div className='bg-[#121F5E] flex flex-col justify-center mt-25'>
         <div className='justify-items-center py-16'>
           <img src="/src/assets/logo-footer.png" alt="" />
         </div>




         <div className='flex justify-evenly'>

          <div className='text-[#ffffff5d] space-y-3  '>
                    <p className='text-white font-bold' >About Us</p>                   
                    <p className='w-60' >We are a passionate team dedicated to providing the best services to our customers.</p>
          </div>
          <div className='text-[#ffffff5d] space-y-3'>
                    <h5 className='text-white font-bold' >Quick Links</h5>
                    <ul  className=''>
                      <li>Home</li>
                      <li>Service</li>
                      <li>About</li>
                      <li>Contact</li>

                    </ul>
          </div>

          <div className='text-[#ffffff5d] space-y-3'>
                    <p className='text-white font-bold'>Subscribe</p>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <input className=' text-gray-600 border-none bg-white rounded-r-none rounded-l-xl py-1 px-3' value="Enter your email Submit" type="text"  /> 
                    <button class="cursor-pointer bg-linear-90 from-yellow-300 to-red-400 text-black px-3 py-1 rounded-l-none rounded-r-xl">Subscribe</button>
          </div>




         </div>

         <div className='border-t border-t-gray-600 mt-8 text-white justify-items-center py-10 '>
          <p>@2024 Your Company All Rights Reserved.</p>
         </div>

      </div>
    );
};

export default Footer;