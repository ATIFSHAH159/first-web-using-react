import '../../Assests/Addform.css';
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { deleteCustomerbyid, getlogin, updateloginById } from '../../Services/api';


function UpdateForm() {
    const [logindata, setlogindata] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedlogin, setSelectedlogin] = useState({});
    const [updatedlogin, setUpdatedlogin] = useState({
      firstname: "",
      lastname: "",
    });
  
    useEffect(() => {
      getCustomerDetail();
    },[]);
  
    const getCustomerDetail = async () => {
      try {
        const result = await getlogin();
        console.log(result.data);
        setlogindata(result.data);
      } catch (error) {
        console.log("Error ", error);
      }
    };
  
    const handleDeleteCustomer = async (id) => {
      try {
        await deleteCustomerbyid(id);
        const updated = logindata.filter((product) => product._id !== id);
        setlogindata(updated);
      } catch (error) {
        console.log("Error in deleting login", error);
      }
    };
  
    const handleShow = (product) => {
      setSelectedlogin(product);
      setUpdatedlogin({
        firstname: product.firstname,
        lastname: product.lastname,
        // Set other fields as needed
      });
      setShowModal(true);
    };
  
    const handleClose = () => {
      setShowModal(false);
    };
  
    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        const id = selectedlogin._id;
        const updatedProduct = await updateloginById(id, updatedlogin);
        console.log("Product updated:", updatedProduct);
        setShowModal(false);
        // Optionally, you can fetch updated data after a successful update
        getCustomerDetail();
      } catch (error) {
        console.log("Error in updating product", error);
      }
    };
    return (

        <>
      <Table striped bordered hover style={{width:'100%'}}>
        <thead>
          <th>FirstName</th>
          <th>LastName</th>
         
        </thead>
        <tbody>
          {logindata.map((details, index) => (
            <tr key={index}>
              <td>{details.firstname}</td>
              <td>{details.lastname}</td>
              <td>
                 <button onClick={() => handleDeleteCustomer(details._id)}  style={{ backgroundColor: '#D11A2A', border: 'none', width: '100%', padding: '10px' }} ><RiDeleteBin6Line /></button>
                 <br></br>
                <button onClick={()=>handleShow(details)}  style={{
      backgroundColor: '#008CBA',
      border: 'none',
      marginTop: '5px',
      width: '100%',
      padding: '10px',
    }}><FaEdit /></button> 
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={updatedlogin.firstname}
                onChange={(e) => setUpdatedlogin({ ...updatedlogin, firstname: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                value={updatedlogin.lastname}
                onChange={(e) => setUpdatedlogin({ ...updatedlogin, lastname: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
    );
}
export default UpdateForm;