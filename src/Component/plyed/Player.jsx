import React, { use, useState } from 'react';
import AvailablePlayer from '../AvailablePlayer/AvailablePlayer';
import SelectedPlayer from '../SelectedPlayers/SelectedPlayer';

const Players = ({ PlayerDataPromise, setcoin, coin }) => {

        const datas = use(PlayerDataPromise);
        const [totalPlayer, setSelectedPlayer] = useState("available");
        const [selectedTab, setSelectedTab] = useState([]);

        return (
         <div className='container mx-auto '>
           <div className='flex items-center justify-between mt-10 '>
                {totalPlayer === 'available' ? <h2 className='text-2xl font-bold'>Available Players</h2> : <h2 className='text-2xl font-bold'>Selected Players ({selectedTab.length }/{datas.length})</h2>}
                 <div>
                 <button onClick={() => setSelectedPlayer('available')}
                className={`btn ${totalPlayer === "available" ? "bg-[#E7FE29]" : ""} text-gray-600 rounded-r-none rounded-l-xl`}>
                Available</button>
                <button
                onClick={() => setSelectedPlayer('selected')}
                className={`btn ${totalPlayer === "selected" ? "bg-[#E7FE29]" : ""} text-gray-600 rounded-l-none rounded-r-xl`}>Selected ({selectedTab.length})</button>
            </div>

        </div>
                {totalPlayer === 'available' ? (
                <AvailablePlayer
                 datas={datas}
                 setcoin={setcoin}
                 coin={coin} 
                 setSelectedTab={setSelectedTab}
                 selectedTab={selectedTab} />
         ) : (
        <SelectedPlayer selectedTab={selectedTab}
         setcoin={setcoin}
         coin={coin}
         setSelectedTab={setSelectedTab}/>)}
        {/*  player : {datas.length} */}

                </div>
        );
};

export default Players;