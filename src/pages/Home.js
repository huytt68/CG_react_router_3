import "../styles/Home.css"
import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Left from "../components/Left";
import Right from "../components/Right";

const Home = () => {
	return (
		<>
			<div className="container-fluid">
				<Header/>
				<Navbar/>
				<div className="row">
					<Left/>
					<div className="mid col-7">
						<Outlet/>
					</div>
					<Right/>
				</div>
			</div>
		</>
	)
}

export default Home;