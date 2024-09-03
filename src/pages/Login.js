import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {MyContext} from "../MyContext";

const Login = () => {
	const [dataLogin, setDataLogin] = useState({username:'', password:''});
	const [notice, setNotice] = useState('')
	const navigate = useNavigate();
	let {setCurrentUser} = useContext(MyContext);

	const login = () =>{
		axios.post("https://api-product-demo-react.onrender.com/login", dataLogin).then((res) => {
				alert("Successfully login!");
				setCurrentUser(res.data);
				navigate('/');
		}).catch(e => {
			alert("Wrong username or password!")
		})
	}
	const onChangeUsername = (event) => {
		setDataLogin({...dataLogin, username: event.target.value});
	}

	const onChangePassword = (event) => {
		setDataLogin({...dataLogin, password: event.target.value});
	}

	return (
		<>
			<div className='container'>
				<div className="row d-flex">
					<div className="col-2"></div>
					<div className="col-8 login">
						<h2 className="mb-4 text-center">Login</h2>
						<div className="form-group">
							<label>Username</label>
							<input type="text" className="form-control" value={dataLogin.username}
							       onChange={e => onChangeUsername(e)}
							       placeholder="Username"/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input type="password" className="form-control" value={dataLogin.password}
							       onChange={e => onChangePassword(e)}
							       placeholder="Password"/>
						</div>
						<div className="row">
							<div className="col-12">
								<button className='btn btn-primary w-100 mt-2' onClick={login}>Login</button>
							</div>
						</div>
						<div className="row">
							<div className="col-12 text-center mt-2">
								<Link to={'/register'}>Register</Link>
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

export default Login;