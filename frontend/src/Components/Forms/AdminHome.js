import Button from 'react-bootstrap/Button';
import { BsSearch } from 'react-icons/bs';
import { RiLogoutBoxRFill } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaHandsClapping } from "react-icons/fa6";
import DateTime from '../../DateTime';
import '../../Assests/Admindashboard.css';
function AdminHome(){

return(
    <>
    <div style={{backgroundColor:'#AEC6CF'}}>
          <div className='Upperside'>
        <div className="welcome-message">
          <h3 style={{marginTop:'23px',marginLeft:'-220px'}}>Welcome Admin<FaHandsClapping fontSize={'30px'} style={{ color: 'yellow' }} /></h3>
          <p style={{marginTop:'13px',marginLeft:'-220px'}}>"Admin Excellence: Efficient, Resourceful"</p>
        </div>
        <div className='searchbar'>
          <input type="text" placeholder="Search.." style={{ height: '35px', marginTop: '40px',width:'170px' }} />
          <button type="button" className="search-button"  style={{ marginTop: '27px' }}><BsSearch /></button>
        </div>
        <div style={{marginTop:'30px',marginLeft:'85px',boxShadow:'0.5px 0.5px 2px 2px #929292'}}>
          <DateTime />
        </div>
        <div className='buttons'>
          <Button variant="outline-danger" ><RiLogoutBoxRFill fontSize={'30px'} /></Button>
          <Button variant="outline-info" ><MdOutlineNotificationsActive fontSize={'30px'} /></Button>
        </div>
      </div>


      </div>

    </>
);


}
export default AdminHome;