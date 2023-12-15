import { useContext, useState } from 'react';
import '../src/Assests/Loginpage.css';
import { Link, useNavigate } from 'react-router-dom';
import { Login } from './Services/api';
import { Context } from './Components/contexts';
function Loginpage(){
	const { setUserData, userData } = useContext(Context);

const [userCridentials, setUserCridentials] = useState({
	email: '',
	password: ''
});
const navigation = useNavigate();

const handleInput = (e) => {
	setUserCridentials({...userCridentials, [e.target.name]: e.target.value});
}

const handleLogin = async(e) => {
	e.preventDefault();
	try {
		const response = await Login(userCridentials);
		if (response.data.message === true) {
			setUserData(response.data.response);
			console.log(userData);
			navigation('/');
		}
	} catch (error) {
		console.log(error);
	}
}
	
    return(
<div class="form-container">
	<p class="title">Login</p>
	<form class="form">
		<div class="input-group">
			<label for="username">Username</label>
			<input type="text" name="email" id="username" placeholder="" onChange={handleInput}/>
		</div>
		<div class="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder="" onChange={handleInput}/>
			<div class="forgot">
				<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
			</div>
		</div>
		<button class="sign" onClick={handleLogin}>Sign in</button>
	</form>
	<div class="social-message">
		<div class="line"></div>
		<div class="line"></div>
	</div>
	<p class="signup">Don't have an account?
	<Link to={"/Registrationform"}>
		<a rel="noopener noreferrer" href="#" class="">Sign up</a>
	</Link>
	</p>
</div>

    );

}
export default Loginpage;