import React, { useContext } from "react";
import { Context } from "./Components/contexts";

function Wishlist() {
  const { wishlist } = useContext(Context);

  return (
   
    <div>
       <br></br>
      {wishlist.map((item, idx) => (
        <div key={idx} style={{width:'100%',height:"40vh",borderRadius:'20px',display:'flex',flexDirection:'row',boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>

          <div style={{width:"30%",height:"40vh"}}>
        <img src={item.Pic} style={{width:"100%",height:'38vh'}}/>
        </div>
        <div style={{width:'70%',height:"40vh",textAlign:'center',marginTop:"50px"}}>
          <p>{item.Name}</p>
          <p>{item.price}</p>
          <button>ADD TO CART</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
