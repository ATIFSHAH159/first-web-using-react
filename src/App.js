import MenuBar from "./Components/Menubar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import 'font-awesome/css/font-awesome.min.css';
import AdminLogin from "./Components/AdminLogin";
import { Route, Routes, useLocation } from "react-router-dom";
import Aboutus from "./Aboutus";
import Contactus from "./Components/Contactus";
import Sofa from "./Sofa";
import Chairs from "./chairs";
import Beds from "./Beds";


function App() {
  const location = useLocation();

  const shownavbar = !location.pathname.includes("/AdminLogin");

  return (
    <div>
         {/* // conditional rendering */}
      {shownavbar && <MenuBar />} 
   
     <Routes>
      <Route path="/"  element={<Home />}  />
      <Route path="/Aboutus"  element={<Aboutus />}  />
      <Route path="/Beds"  element={<Beds />}  />
      <Route path="/chairs"  element={<Chairs />}  />
      <Route path="/Sofa"  element={<Sofa />}  />
      <Route path="/Contactus"  element={<Contactus />}  />
      <Route path="/AdminLogin"  element={<AdminLogin />}  />
    </Routes>

    </div>
  );
}

export default App;
