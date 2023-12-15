import  furniturestructureModel  from "../Models/Productsdata.js";



export const deleteproduct=async(req , res)=>{
    try{
        const {productid} = req.params;
        console.log("delete products with id",productid);
        await furniturestructureModel.findByIdAndDelete(productid);
        res.json({message:"delete successfully"});
        res.status(500).json({error:"internal server error"})

    }
    catch (error){
        console.error("error delete products",error);
    }
}





export const getproduct=async(req,res)=>{
try{
    const bedsProductdData=await furniturestructureModel.find();
     res.json(bedsProductdData);
     console.log(bedsProductdData)
}
catch (error){
console.log("Not found in Data")

}
}
export const getproductByCategory=async(req, res)=>{
  const { category } = req.params;
  console.log(category);
  try{
      const bedsProductdData=await furniturestructureModel.find({category});
       res.json(bedsProductdData);
       console.log(bedsProductdData)
  }
  catch (error){
  console.log("Not found in Data")
  
  }
  }



export const addProducts=async(req,res)=>{
    
    const{name,pic,price,category, description}=req.body;
    try{
        const newProduct=new furniturestructureModel({
            name,
            pic,
            price,
            pic:req.file.path,
            category,
            description
        });
        const savedproducts=await newProduct.save();
        console.log(savedproducts);
        res.json({Response:true,message:"product added successful"});
        console.log("product added successfull");
    }
    catch(error){
        console.error(error);
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
      const updatedProduct = await furniturestructureModel.findByIdAndUpdate(
        id,
        { name, price },
        { new: true }
      );
      if (updatedProduct) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };