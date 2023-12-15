import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { getproduct, deleteproductbyid, updateProductById } from "../../Services/api";

function ViewForm() {
  const [productdata, setProductdata] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [updatedValues, setUpdatedValues] = useState({
    name: "",
    price: 0,
  });

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    try {
      const result = await getproduct();
      setProductdata(result.data);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await deleteproductbyid(id);
      const updated = productdata.filter((product) => product._id !== id);
      setProductdata(updated);
    } catch (error) {
      console.log("Error in deleting product", error);
    }
  };

  const handleShow = (product) => {
    setSelectedProduct(product);
    setUpdatedValues({
      name: product.name,
      price: product.price,
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
      const id = selectedProduct._id;
      const updatedProduct = await updateProductById(id, updatedValues);
      console.log("Product updated:", updatedProduct);
      setShowModal(false);
      // Optionally, you can fetch updated data after a successful update
      getProductDetail();
    } catch (error) {
      console.log("Error in updating product", error);
    }
  };

  return (
    <>
      <Table striped bordered hover style={{width:'100%'}}>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Price</th>
         
        </thead>
        <tbody>
          {productdata.map((details, index) => (
            <tr key={index}>
              <td>
                <img style={{ width: "4rem", height: "5rem" }} src={`http://localhost:5000/${details.pic}`} alt="" />
              </td>
              <td>{details.name}</td>
              <td>{details.price}</td>
              <td>
  <button
    onClick={() => deleteProduct(details._id)}
    style={{ backgroundColor: '#D11A2A', border: 'none', width: '100%', padding: '10px' }}
  >
<RiDeleteBin6Line />
  </button>
  <br />
  <button
    onClick={() => handleShow(details)}
    style={{
      backgroundColor: '#008CBA',
      border: 'none',
      marginTop: '5px',
      width: '100%',
      padding: '10px',
    }}
  >
<FaEdit />
  </button>
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
                value={updatedValues.name}
                onChange={(e) => setUpdatedValues({ ...updatedValues, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                value={updatedValues.price}
                onChange={(e) => setUpdatedValues({ ...updatedValues, price: e.target.value })}
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

export default ViewForm;
