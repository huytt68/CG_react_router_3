import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "../MyContext";

const Navbar = () => {
	const navigate = useNavigate();
	let {currentUser} = useContext(MyContext);
	const toLogin = () => {
		navigate("/login")
	}
	const toRegister = () => {
		navigate("/register")
	}

	return (
			<div className="row">
				<div className="col-12 p-0">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									<Link className="nav-link" to="/">Home</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/students">Student</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/products">Product</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/users">User</Link>
								</li>
							</ul>
							<div className="my-2 my-lg-0">
								<span className="nav-item mr-2">Hi, {currentUser.username}</span>
								<button className="btn btn-outline-primary my-2 my-sm-0" onClick={toLogin}>
									Login
								</button>
								<button className="btn btn-outline-primary my-2 my-sm-0 ml-4" onClick={toRegister}>
									Register
								</button>
							</div>
						</div>
					</nav>
				</div>
			</div>
	)
}
export default Navbar;