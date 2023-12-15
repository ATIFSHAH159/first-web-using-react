import React, { useState } from 'react';
import '../Assests/Sidebar.css';
import AddForm from '../Components/Forms/Addform';
import UpdateForm from './Forms/loginRecords';
import ViewForm from './Forms/ViewForm';
import AdminHome from './Forms/AdminHome';
import Adminbody from './Forms/Adminbody';
import { IoHome } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdRecordVoiceOver } from "react-icons/md";
import { LuView } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa6";
import img300 from '../Images/Navlogo1.png';

function AdminLogin() {
    const[showHome,setshowhome]=useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showViewForm, setViewForm] = useState(false);


    // Function to toggle the visibility of the "Add,del,update,view" form used for on click
    const toggleshowhome = () => {
        setShowAddForm(false);
        setShowUpdateForm(false)
        setViewForm(false)
        setshowhome(true)
    };

    const toggleAddForm = () => {
        setShowAddForm(true);
        setShowUpdateForm(false)
        setViewForm(false)
        setshowhome(false)
    };
    const toggleUpdateForm = () => {
        setShowAddForm(false);
        setShowUpdateForm(true)
        setViewForm(false)
         setshowhome(false)
    };
    const toggleViewForm = () => {
        setShowAddForm(false);
        setShowUpdateForm(false)
        setViewForm(true)
        setshowhome(false)
    }

    return (
        <div className="container-fluid">
            <div className="row" style={{ height: "100vh" }}>
                <div className="col-md-3" style={{  height: "100%"}}>
                    <aside className="sidebar">
                        <div style={{border:'2px solid black',borderRadius:'50%',width:'40%',height:'20vh'}}>
                            <img src={img300} style={{width:"100%",marginLeft:'10px'}}></img>
                        </div>
                        <h2>Mapple & Leaf </h2>
                        <hr style={{width:'75%',border:'2px solid black',marginTop:'-30px'}}></hr>
                        <ul>
                        <li>
                                <a href="#" onClick={toggleshowhome}>
                                <IoHome fontSize={'30px'} /> Dashboard
                                </a>
                            </li>

                            <li>
                                <a href="#" onClick={toggleAddForm}>
                                <MdOutlineProductionQuantityLimits fontSize={'30px'} />   AddProducts
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={toggleUpdateForm}>
                                <MdRecordVoiceOver fontSize={'30px'} />  UserRecords</a>
                            </li>
                            <li>
                                <a href="#" onClick={toggleViewForm}>
                                <LuView fontSize={'30px'} />  ViewProucts</a>
                                </li>

                                <li>
                                <a href="#" >
                                <FaRegCommentDots fontSize={'30px'}/>Comments</a>
                                </li>
                        </ul>
                    </aside>
                </div>
                <div className="col-md-9" style={{ height: "100%" }}>
                  
                    <div className='row' style={{height:'20vh',marginLeft:'-20px'}}>
                        <AdminHome/>
                    </div>
                    <div className='row' style={{height:'80vh',marginLeft:'-15px'}}>
                    {showAddForm && <AddForm />}
                    {showUpdateForm && <UpdateForm />}
                     {showViewForm && <ViewForm />} 
                     {showHome&&<Adminbody/>}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AdminLogin;



