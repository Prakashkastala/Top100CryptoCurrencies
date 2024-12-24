import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Images from './images';
 function App() {
  const [crypto, setCrypto] = useState('');
  const[data,setdata]=useState([]);
 useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100page=1&sparkline=false`)
    .then(res => {
      setdata(res.data);
    })
  },[])
  return (
    <>
       <div className='header'>
      <input type='text' placeholder='Search Crypto' className='search' value={crypto} onChange={(e)=>setCrypto(e.target.value)}/>
      </div> 
      <h1>Top 100 Cryptocurrencies</h1>
      {
        data.length>0 &&
        <div className='container'>
          {
            data.filter((item)=>item.name.toLowerCase().includes(crypto.toLowerCase())).map((item)=>(
              <div>
         <Images Name={item.name} Rank={item.market_cap_rank} Price={item.current_price} MarketCap={item.market_cap}Image={item.image}/>
            </div>
            ))}
        
        </div>
      }
    
    </>
  )
}
export default App;
