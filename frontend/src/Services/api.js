import axios from 'axios';

const url="https://mydata-qt8r.onrender.com";

export const addfurniture=async (formdata)=>{
  return await  axios.post(`${url}/Forms/Addform`,formdata);
}

export const getproduct=async ()=>{
  return await  axios.get(`${url}/Forms/ViewForm`);
}


export const getproductByCategory=async (category)=>{

  return await  axios.get(`${url}/${category}`, category);
}



export const deleteproductbyid=async (productid)=>{
   return await  axios.delete(`${url}/Forms/ViewForm/${productid}`);
 }


 export const updateProductById = async (id, updatedProduct) => {
    return await axios.put(`${url}/Forms/ViewForm/${id}`, updatedProduct);
}




// login apis



export const addform=async(formdata)=>{
  console.log(formdata);
  return await axios.post(`${url}/Registrationform`,formdata);
}
export const Login = async (userCridentials) => {
  return await axios.post(`${url}/Login/User`, userCridentials);
}
export const updatePassword = async (id, newPassword) => {
  return await axios.put(`${url}/Update/User/${id}`, newPassword);
}
export const getlogin=async ()=>{
  return await  axios.get(`${url}/Forms/loginRecords`);
}

export const deleteCustomerbyid=async (id)=>{
  return await  axios.delete(`${url}/Forms/loginRecords/${id}`);
}


export const updateloginById = async (id, updatedProduct) => {
   return await axios.put(`${url}/Forms/loginRecords/${id}`, updatedProduct);
}
