import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdOutlineDelete } from "react-icons/md";

const SelectedPlayer = ({selectedTab, setSelectedTab,coin,setcoin}) => {       
  const deleteSelectedPlayer= (data)=> {
    console.log(data, 'player');
  const filterDel =selectedTab.filter(delplayer =>delplayer.name !=data.name)
    console.log(filterDel , 'deleted Data');
    setSelectedTab(filterDel);
    setcoin(coin+ data.price);
  }
return (
  <div>          
    { selectedTab.length === 0 ? <div className='flex flex-col items-center mx-4 border rounded-xl border-gray-200 px-10 py-30 my-8 '>
    <h2>No Player Selected</h2>
    <p>no selected player available please select player</p>
    </div> :
     selectedTab.map ((data,ind)=>{
      return <div key={ind} className='flex justify-between items-center mx-4 border rounded-xl border-gray-300 p-2 my-3 '>
        <div className='flex items-center '>
          <img src={data.image} alt={data.name} className='h-[80px] w-[80px] object-cover ' />
          <div className='ml-3'>
            <p className='text-xl font-bold flex items-center gap-1.5 '><FaUser className='text-gray-500 text-[16px]'/> {data.name}</p>
            <p className='text-[16px] font-medium '>{data.role} </p>
          </div>

        </div>
        <button className='btn' onClick={()=> deleteSelectedPlayer(data)}><MdOutlineDelete className=' text-red-400 ' /></button>

      </div>
    }

  )}
  </div>
  );
};

export default SelectedPlayer;