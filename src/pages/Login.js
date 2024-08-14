import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
	const [dataLogin, setDataLogin] = useState({username:'', password:''});
	const [notice, setNotice] = useState('')
	const navigate = useNavigate();

	const login = () =>{
		if (dataLogin.username ==='admin' && dataLogin.password==='admin') {
			navigate('/');
		} else {
			setNotice('Username or Password Invalid')
		}
	}

	return (
		<>
			<div className='container'>
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-6 login">
						<center>
							<h2 className="mb-4">Login</h2>
							<input className="mb-4 w-100" onChange={(e) => {
								setDataLogin({...dataLogin, username: e.target.value})
							}} placeholder={'Username'}/>
							<input className="d-block mb-4 w-100" type='password' onChange={(e) => {
								setDataLogin({...dataLogin, password: e.target.value})
							}} placeholder={'Password'}/>
							<button className='btn-action d-block mb-2' onClick={login}>Login</button>
							<Link to={'/register'}>Register</Link>
							{notice && <center><p style={{color: 'red'}}>{notice}</p></center>}
						</center>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login;