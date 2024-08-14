import {Link} from "react-router-dom";

const Navbar = () => {
	return (
			<div className="row">
				<div className="col-12 p-0">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<Link className="nav-link" to="/">Home</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/cart">Cart</Link>
								</li>
							</ul>
							<div className="my-2 my-lg-0">
								<button className="btn btn-outline-primary my-2 my-sm-0">
									<Link to={'/login'}>Login</Link>
								</button>
								<button className="btn btn-outline-primary my-2 my-sm-0 ml-4">
									<Link to={'/register'}>Register</Link>
								</button>
							</div>
						</div>
					</nav>
				</div>
			</div>
	)
}
export default Navbar;