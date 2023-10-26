import { createContext } from "react";
import { useState } from "react";
import { bedproducts,chairsproduct,sofa_product } from "./dataofproducts";

export const Context = createContext();

const Productscontext=({children})=>{
    const [product1,setproducts1]=useState(bedproducts);
    const [product2,setproducts2]=useState(chairsproduct);
    const[product3,setproducts3]=useState(sofa_product)

return(
    <Context.Provider
     value={{product1,setproducts1,product2,setproducts2,product3,setproducts3}}>
{children}
    </Context.Provider>

);
};
export default Productscontext;