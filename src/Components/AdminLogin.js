import React, { useState } from 'react';
import img9 from '../Images/Adminlogo.png';
import '../Assests/Sidebar.css';
import AddForm from '../Components/Forms/Addform';
import UpdateForm from './Forms/Updateform';
import DeleteForm from './Forms/Deleteform';
import ViewForm from './Forms/ViewForm';

function AdminLogin() {
    const [showAddForm, setShowAddForm] = useState(false); // Initialize the state
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [showViewForm, setViewForm] = useState(false);


    // Function to toggle the visibility of the "Add" form
    const toggleAddForm = () => {
        setShowAddForm(true);
        setShowUpdateForm(false)
        setShowDeleteForm(false)
        setViewForm(false)
    };
    // Function to toggle the visibility of the "Update" form
    const toggleUpdateForm = () => {
        setShowAddForm(false);
        setShowUpdateForm(true)
        setShowDeleteForm(false)
        setViewForm(false)

    };
    const toggleDeleteForm = () => {
        setShowAddForm(false);
        setShowUpdateForm(false)
        setShowDeleteForm(true)
        setViewForm(false)
    }
    const toggleViewForm = () => {
        setShowAddForm(false);
        setShowUpdateForm(false)
        setShowDeleteForm(false)
        setViewForm(true)
    }

    return (
        <div className="container-fluid">
            <div className="row" style={{height: "20vh" }} >
                <img src={img9} style={{ width: "100%", height: "20vh",padding:"0px"  }} alt="Admin Image" /></div>
            <div className="row" style={{ height: "80vh" }}>
                <div className="col-md-3" style={{  height: "100%" }}>
                    <aside className="sidebar">
                        <h2>Dashboard</h2>
                        <ul>
                            <li>
                                <a href="#" onClick={toggleAddForm}>
                                    Add
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={toggleUpdateForm}>
                                    Update</a>
                            </li>
                            <li>
                                <a href="#" onClick={toggleDeleteForm}>Delete</a>
                            </li>
                            <li><a href="#" onClick={toggleViewForm}>View</a></li>
                        </ul>
                    </aside>
                </div>
                <div className="col-md-9" style={{ height: "100%" }}>
                    {/* Conditionally render the "Add" form */}
                    {showAddForm && <AddForm />}
                    {showUpdateForm && <UpdateForm />}
                    {showDeleteForm && <DeleteForm />}
                    {showViewForm && <ViewForm />}


                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
