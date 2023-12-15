import '../src/Assests/Registrationform.css';
import {useState} from 'react';
import { addform } from './Services/api';

function Registrationform(){

    const [log, setlog] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		confirmpassword: '', 
    })
    const { firstname, lastname,email, password,confirmpassword } = log;

	const handlechange = (e) => {
        setlog({ ...log, [e.target.name]: e.target.value })
    }

	const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            // const formdata = new FormData();
            // formdata.append('firstname', firstname);
            // formdata.append('lastname',lastname);
			// formdata.append('email',email);
            // formdata.append('password',password);
			// formdata.append('confirmpassword',confirmpassword);

			console.log(log);

            await addform(log);

            alert("data is saved");
        }
        catch (error) {
            console.log("error")
        }
	}


    return(
<div class="form-container1">
	<p class="title1">Registration form</p>
	<form class="form1">
		<div class="input-group1">
			<label for="username">FirstName</label>
			<input type="text" name="firstname" id="username" placeholder=""
			onChange={handlechange}/>
		</div>
        <div class="input-group1">
			<label for="username">LastName</label>
			<input type="text" name="lastname" id="username" placeholder=""
			onChange={handlechange}/>
		</div>
        <div class="input-group1">
			<label for="username">Email</label>
			<input type="text" name="email" id="username" placeholder=""
			onChange={handlechange}/>
		</div>
		<div class="input-group1">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder=""
			onChange={handlechange}/>
		</div>
        <div class="input-group1">
			<label for="password">Confirm Password</label>
			<input type="password" name="confirmpassword" id="password" placeholder=""
			onChange={handlechange}/>
		</div>
        <br></br>
		<button class="sign" onClick={handlesubmit}>Sign In</button>
	</form>

	
</div>

    );

};
export default Registrationform;