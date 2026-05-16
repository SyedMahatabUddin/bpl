import React, { useState } from 'react';
import { BsFillFlagFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
const AvailablePlayer = ({datas , setcoin , coin ,selectedTab, setSelectedTab }) => {
  
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
          {datas.map((data) => {            
      const [isselected, setisSelected] = useState(false);              
            const  coinfunc = ()=>{
              let newCoin = coin - data.price;
              if (newCoin >= 0) {                    
                setcoin(coin - data.price)
              } else{
                toast.error("Not Enough Coin")
                return
              }
              

              toast.success(`${data.name} is selected`)
                    setisSelected(true);
                 setSelectedTab([...selectedTab , data ])
 };
                  
     return  <div className='w-full my-4 ' key={data.playerId} >
          <div className="card w-full rounded-xl shadow-sm border border-gray-200 ">
    <figure>
      <img className='w-full h-60 rounded ' src={data.image} alt={data.name} />
     </figure>
     <div className="card-body">
       <h2 className="card-title"> <FaUser className='text-gray-300'/> {data.name}</h2>
     <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2 text-sm'>
                <BsFillFlagFill/>
                <span>{data.country}</span>
          </div>
          <button className="btn btn-soft">{data.role}</button>
    </div>
<hr className='text-gray-400' />
    <div className='grid grid-cols-2 gap-1.5'>
          <p className='col-span-2'>Rating : {data.rating}</p>

          <p>{data.battingType}</p>
           <p className='text-right '>{data.bowlingType}</p>
          
          <p>price money: ${data.price}</p>
          <button className='justify-self-end cursor-pointer rounded py-0.5 px-4 border border-gray-600' onClick={coinfunc} disabled={isselected ? true : false} > {isselected === true ? 'Selected':'Choose Player'} </button> 
    </div>

   </div>
   </div> 
                              
 </div>
          } )}
          

</div>

          );
};

export default AvailablePlayer;