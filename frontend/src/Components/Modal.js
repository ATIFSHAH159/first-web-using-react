import { useContext, useState } from "react";
import { Context } from "./contexts";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updatePassword } from "../Services/api";
function LoggedUser() {
    const { userData, setUserData } = useContext(Context);
    const [showModal, setShowModal] = useState(false);
    const [newPassword, setNewPassword] = useState({
        password: '',
        confirmpassword: ''
    });

    if (!userData) {
        return null; // or return a loading state, or something else
    }
    const handleLogoutUser = () => {
        setUserData(null);
    }
    const handleShow = (product) => {
        setShowModal(true);
      };
    
      const handleClose = () => {
        setShowModal(false);
      };

      const handleInputChange = (e) => {
        setNewPassword({...newPassword, [e.target.name]: e.target.value});
      }

      const handleUpdatePassword = async (e) => {
        e.preventDefault();

        try {
            if(newPassword.password === newPassword.confirmpassword) {
                const response = await updatePassword(userData._id, newPassword);
                if(response.data.message === true) {
                    alert('Password Updated Successfully');
                    
                } else {
                    alert('Password is not updated');
                }
            } else {
                alert("Password and confirm Password did not match");
            }
        } catch (error) {
            console.log("Invalid user Id", error);
        }
      }
    return(
        <>
            <div style={{ display: 'flex',flexDirection: 'column',justifyContent:'center',alignItems: 'center',width: '20%', height: '200px', border: '1px solid black', borderRadius: '10px', position: 'absolute', right: '40%',bottom: '30%'}}>
            
            <h6>Welcome  {userData.firstname} {userData.lastname}</h6>
            <p>Email: {userData.email}</p>
            <button onClick={handleShow} style={{backgroundColor:'green',border:'none'}}>Change Password</button>
            <button type="submit" onClick={handleLogoutUser} style={{backgroundColor:'red',border:'none',marginTop:'5px'}}>Log Out</button>
        </div>
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductName">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="text"
                name="password"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="text"
                name="confirmpassword"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleUpdatePassword}>
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
        </>
    )
}
export default LoggedUser;