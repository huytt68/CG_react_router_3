import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
	const [student, setStudent] = useState({})
	let {id} = useParams();
	useEffect(() => {
		axios.get('http://localhost:5000/students/'+id).then(res => {
			setStudent(res.data);
		})
	},[])
	return (
		<>
			<div className="row">
				<div className="col-12 text-center"><h2>Detail Student</h2></div>
				<table className="table table-striped">
					<tbody>
					<tr>
						<th scope="row">ID</th>
						<td>{student.id}</td>
					</tr>
					<tr>
						<th scope="row">Name</th>
						<td>{student.name}</td>
					</tr>
					<tr>
						<th scope="row">Score</th>
						<td>{student.score}</td>
					</tr>
					<tr>
						<th scope="row">Description</th>
						<td>{student.description}</td>
					</tr>
					<tr>
						<th scope="row">Action</th>
						<td>{student.action}</td>
					</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default DetailProduct;