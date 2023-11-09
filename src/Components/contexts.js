// Productscontext.js
import { createContext, useState } from "react";
import { bedproducts, chairsproduct, sofa_product } from "./dataofproducts";

export const Context = createContext();

const Productscontext = ({ children }) => {
  const [product1, setproducts1] = useState(bedproducts);
  const [product2, setproducts2] = useState(chairsproduct);
  const [product3, setproducts3] = useState(sofa_product);
  const [cartitems, setcartitems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist , setwishlist]= useState([]);


  const handleAddToCart = (product ) => {
    setcartitems([...cartitems, product]);
  };
  

  return (
    <Context.Provider
      value={{
        product1,
        setproducts1,
        product2,
        setproducts2,
        product3,
        setproducts3,
        handleAddToCart,
        cartitems,
        selectedProduct,
        setSelectedProduct,
        wishlist,
        setwishlist,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Productscontext;
