import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const Register = () => {
	const navigate = useNavigate();
	const [dataRegister, setDataRegister] = useState({username: "", password: ""});
	const [notice, setNotice] = useState('')

	const register = () =>{
			setNotice('Under Construction!')
	}

	return (
		<>
			<div className='container'>
				<div className="row row d-flex justify-content-center align-items-center">
					<div className="col-6 register">
						<center>
							<h2 className="mb-4">Register</h2>
							<input className="mb-4 w-100" onChange={(e) => {
								setDataRegister({...dataRegister, username: e.target.value})
							}} placeholder={'Username'}/>
							<input className="d-block mb-4 w-100" type='password' onChange={(e) => {
								setDataRegister({...dataRegister, password: e.target.value})
							}} placeholder={'Password'}/>
							<button className='btn-action d-block mb-2' onClick={register}>Register</button>
							<Link to={'/login'}>Login</Link>
							{notice && <center><p style={{color: 'red'}}>{notice}</p></center>}
						</center>
					</div>
				</div>
			</div>
		</>
	)
}

export default Register;