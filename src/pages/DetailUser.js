import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const DetailUser = () => {
	const [user, setUser] = useState({})
	const navigate = useNavigate();
	let {id} = useParams();
	useEffect(() => {
		axios.get(`https://api-product-demo-react.onrender.com/users/${id}`).then(res => {
			setUser(res.data);
		})
	},[])

	const toBackUser = () => {
		navigate("/users");
	}

	return (
		<>
			<div className="row">
				<div className="col-12 text-center"><h1>Detail User</h1></div>
				<table className="table table-striped">
					<tbody>
					<tr>
						<th scope="row">ID</th>
						<td>{user.id}</td>
					</tr>
					<tr>
						<th scope="row">Username</th>
						<td>{user.username}</td>
					</tr>
					<tr>
						<th scope="row">Email</th>
						<td>{user.email}</td>
					</tr>
					</tbody>
				</table>
			</div>
			<div className="row">
				<div className="col-12">
					<button type="button" className="btn btn-outline-primary col-3" onClick={toBackUser}>Back</button>
				</div>
			</div>
		</>
	)
}

export default DetailUser;