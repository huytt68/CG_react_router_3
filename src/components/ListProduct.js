import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const ListProduct = () => {
	const [list, setList] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:5000/students").then(res => {
			setList(res.data);
		})
	},[]);
	return (
		<>
			<div className="row list">
				<div className="col-12 text-center"><h1>List Students</h1></div>
				<table className="table table-hover">
					<thead className="thead-light">
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Score</th>
							<th scope="col">Action</th>
							<th className="col-1" scope="col"></th>
							<th className="col-1" scope="col"></th>
						</tr>
					</thead>
					<tbody>
					{list.map(item => (
							<tr>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.score}</td>
								<td>{item.action}</td>
								<td className="col-1">
									<Link to={'/detail/'+item.id}>Detail</Link>
								</td>
								<td className="col-1">Delete</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
)
}

export default ListProduct;