import { Suspense, useState } from "react";
import Banner from "./Component/Banner/Banner"
import Navbar from "./Component/Navbar/Navbar"
import Player from "./Component/plyed/Player"
import { ToastContainer } from "react-toastify";
import Footer from "./Component/Footer/Footer";
import NewsLetter from "./Component/NewsLetter/NewsLetter";


const FetchData = async () => {
  const res = await fetch('/data.json')
  return res.json();
};

const PlayerDataPromise = FetchData();
function App() {
  const [coin , setcoin] = useState(5400000);
  return(
    <>   
    
        <Navbar coin={coin} />
        <Banner />
        <Suspense fallback={
          <div className="flex justify-center my-10"><span className="loading loading-ring loading-xl"></span></div>
                             }>
        <Player PlayerDataPromise ={PlayerDataPromise} setcoin={setcoin} coin={coin}  />
        </Suspense>
        <ToastContainer/>
        <NewsLetter/>
        <Footer/>
    </>
  )
}

export default App      
