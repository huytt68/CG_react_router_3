import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const Register = () => {
	const navigate = useNavigate();
	const [dataRegister, setDataRegister] = useState({email:"", username: "", password: ""});
	const [notice, setNotice] = useState('')

	const register = () =>{
			axios.post("https://api-product-demo-react.onrender.com/register", dataRegister).then(() => {
				alert("Successfully register!")
				navigate("/login")
			})
	}

	const onChangeEmail = (event) => {
		setDataRegister({...dataRegister, email: event.target.value});
	}

	const onChangeUsername = (event) => {
		setDataRegister({...dataRegister, username: event.target.value});
	}

	const onChangePassword = (event) => {
		setDataRegister({...dataRegister, password: event.target.value});
	}

	return (
		<>
			<div className='container'>
				<div className="row d-flex">
					<div className="col-2"></div>
					<div className="col-8 register">
						<h2 className="mb-4 text-center">Register</h2>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" value={dataRegister.email}
							       onChange={e => onChangeEmail(e)}
							       placeholder="Email"/>
						</div>
						<div className="form-group">
							<label>Username</label>
							<input type="text" className="form-control" value={dataRegister.username}
							       onChange={e => onChangeUsername(e)}
							       placeholder="Username"/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input type="password" className="form-control" value={dataRegister.password}
							       onChange={e => onChangePassword(e)}
							       placeholder="Password"/>
						</div>
						<div className="row">
							<div className="col-12">
								<button className='btn btn-primary w-100 mt-2' onClick={register}>Register</button>
							</div>
						</div>
						<div className="row">
							<div className="col-12 text-center mt-2">
								<Link to={'/login'}>Login</Link>
							</div>
						</div>
						{notice && <center><p style={{color: 'red'}}>{notice}</p></center>}
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		</>
	)
}

export default Register;