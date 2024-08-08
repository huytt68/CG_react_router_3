import "./Home.css"
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";

const Home = () => {
	return (
		<>
			<div className="text-center">
				<div className="row header">
					<div className="logo border border-dark align-content-center col-4">Logo</div>
					<div className="banner border border-dark align-content-center col-8">Banner</div>
				</div>
				<div className="row navbar p-0">
					<Navbar/>
				</div>
				<div className="row main">
					<div className="left col-2 border border-dark align-content-center">Left</div>
					<div className="content col-7 border border-dark align-content-center p-4">
						<Outlet/>
					</div>
					<div className="right col-3 border border-dark align-content-center">Right</div>
				</div>
			</div>
		</>
	)
}

export default Home;