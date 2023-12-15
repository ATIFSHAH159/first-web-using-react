import loginstructureModel from "../Models/loginmodeldata.js";

export const log = async (req, res) => {

  const { firstname,
    lastname,
    email,
    password,
    confirmpassword, } = req.body;
  try {
    const newProduct = new loginstructureModel({
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    });
    const savedproducts = await newProduct.save();
    console.log(savedproducts);
    res.json({ Response: true, message: "record added successful" });
    console.log("record added successfull");
  }
  catch (error) {
    console.error(error);
  }
}


export const getlogin = async (req, res) => {

  try {
    const productdata = await loginstructureModel.find();
    res.json(productdata);
    console.log(productdata)
  }
  catch (error) {
    console.log("Not found in Data")

  }
}
export const getUserLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(password);
  try {
    const response = await loginstructureModel.findOne({ email });
    console.log(response);
    if (response.password === password) {
      res.json({ message: true, response });
    } else {
      console.log('Can not find customer data');
    }
  } catch (error) {
    console.log(error);
  }

}




export const deletelogin = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("delete products with id", id);
    await loginstructureModel.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
    res.status(500).json({ error: "internal server error" })

  }
  catch (error) {
    console.error("error delete products", error);
  }
}






export const updatelogin = async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname } = req.body;
  try {
    const updatedlogin = await loginstructureModel.findByIdAndUpdate(
      id,
      { firstname, lastname },
      { new: true }
    );
    if (updatedlogin) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'login not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { password, confirmpassword } = req.body;
  
  try {
    const response = await loginstructureModel.findByIdAndUpdate(id, {password, confirmpassword}, {new: true});
    console.log(response);
    if(response) {
      res.json({message: true});
    }
    else {
      console.log('Password did not updated');
    }
  } catch (error) {
    
  }
}