import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

const ListUser = () => {
	const [users, setUsers] = useState([]);
	const getUsers = () => {
		axios.get("https://api-product-demo-react.onrender.com/users").then(res => {
			setUsers(res.data);
		})
	}
	useEffect(() => {
		getUsers();
	},[]);

	const deleteUser = (id) => {
		const isConfirm = window.confirm("Are you sure");
		if(isConfirm){
			axios.delete(`https://api-product-demo-react.onrender.com/users/${id}`).then(res => {
				alert("Deleted successfully!");
				getUsers();
			})
		}
	}
	return (
		<>
			<div className="row list">
				<div className="col-12 text-center"><h1>List Users</h1></div>
				<table className="table table-hover">
					<thead className="thead-light">
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Username</th>
						<th scope="col">Email</th>
						<th className="col-1" scope="col"></th>
						<th className="col-1" scope="col"></th>
					</tr>
					</thead>
					<tbody>
					{users.map(item => (
						<tr>
							<td>{item.id}</td>
							<td>{item.username}</td>
							<td>{item.email}</td>
							<td className="col-1">
								<Link to={`/detailuser/${item.id}`}>Detail</Link>
							</td>
							<td className="icon col-1">
								<FontAwesomeIcon icon={faTrashCan} onClick={()=> deleteUser(item.id)}/>
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default ListUser;