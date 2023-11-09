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

  console.log("product1", product1); 

  const addcartitem = (product, id) => {
    if (Array.isArray(product)) {
      const filterData = product.find((data) => data.id === id);
      if (filterData) {
        setcartitems([...cartitems, filterData]);
        setSelectedProduct(filterData); // Set the selected product
      }
    }
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
        addcartitem,
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
