import React from 'react';

const NewsLetter = () => {
 return (
                    
/*    <div className='justify-items-center  py-10 border w-[90vh]  border-black'>
    <div className='justify-items-center mx-10  py-50 border w-[90vh]  border-black'>
      <h6>
       Subscribe to our Newsletter
      </h6>
      <p>
          Get the latest updates and news right in your inbox!
      </p>
      <div>
         <input type="text" value='Enter your email' />
         <button className='cursor-pointer bg-linear-90 from-yellow-300 to-red-400 text-black px-3 py-1 rounded'  >
           Subscribe
          </button>
      </div>
    </div>                                
   </div> */

<div className="relative max-w-6xl mx-auto px-4 translate-y-1/2 z-10">
      {/* বাইরের ট্রান্সপারেন্ট গ্লাসি বর্ডার ওয়ালা ডিল */}
      <div className="p-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-lg">
        
        {/* ভেতরের মেইন হোয়াইট ব্যাকগ্রাউন্ডের কার্ড */}
        <div className="bg-white rounded-2xl py-16 px-6 text-center shadow-inner relative overflow-hidden">
          
          {/* ব্যাকগ্রাউন্ডের হালকা গ্রেডিয়েন্ট গ্লো (গ্লাস ইফেক্ট) */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none -translate-x-12 -translate-y-12"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl pointer-events-none translate-x-16 translate-y-16"></div>

          {/* টেক্সট কন্টেন্ট */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 relative z-10">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base mb-8 max-w-md mx-auto relative z-10">
            Get the latest updates and news right in your inbox!
          </p>

          {/* ইনপুট এবং বাটন সেকশন */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto relative z-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-6 py-3 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white"
            />
            <button className="w-full sm:w-auto cursor-pointer font-bold bg-gradient-to-r from-pink-400 via-orange-300 to-amber-400 text-black px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </div>

   
  );
};

export default NewsLetter;