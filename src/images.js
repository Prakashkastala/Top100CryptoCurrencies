import React from 'react'
function Images(p) {
  return (
    <>  
<img src={p.Image} alt='img' />
<p style={{color:"orange",fontSize:"20px",fontWeight:"bold"}}>{p.Name}</p>
<p>Rank={p.Rank}</p>
<p>Price= ₹{p.Price}</p>
<p>MarketCap={p.MarketCap}</p>
    </>
  )

}
export default Images;