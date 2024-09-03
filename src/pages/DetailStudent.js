import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const DetailStudent = () => {
	const [student, setStudent] = useState({})
	const navigate = useNavigate();
	let {id} = useParams();
	useEffect(() => {
		axios.get(`https://api-student-demo.onrender.com/students/${id}`).then(res => {
			setStudent(res.data);
		})
	},[])

	const toBackStudent = () => {
		navigate("/students");
	}

	return (
		<>
			<div className="row">
				<div className="col-12 text-center"><h1>Detail Student</h1></div>
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
			<div className="row">
				<div className="col-12">
					<button type="button" className="btn btn-outline-primary col-3" onClick={toBackStudent}>Back</button>
				</div>
			</div>
		</>
	)
}

export default DetailStudent;