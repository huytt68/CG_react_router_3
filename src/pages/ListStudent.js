import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";

const ListStudent = () => {
	const [students, setStudents] = useState([]);
	const navigate = useNavigate();
	const getStudent = () => {
		axios.get("https://api-student-demo.onrender.com/students").then(res => {
			setStudents(res.data);
		})
	}
	useEffect(() => {
		getStudent();
	},[]);

	const toAddStudent = () => {
		navigate("/addstudent");
	}
	const toEditStudent = (id) => {
		navigate(`/editstudent/${id}`);
	}
	const deleteStudent = (id) => {
		const isConfirm = window.confirm("Are you sure");
		if(isConfirm){
			axios.delete(`https://api-student-demo.onrender.com/students/${id}`).then(res => {
				alert("Deleted successfully!");
				getStudent();
			})
		}
	}
	return (
		<>
			<div className="row list">
				<div className="col-12 text-center"><h1>List Students</h1></div>
				<div className="col-12 text-center">
					<button className="btn btn-outline-primary mb-2" onClick={toAddStudent}>Add Student
					</button>
				</div>
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
					{students.map(item => (
						<tr>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.score}</td>
							<td>{item.action}</td>
							<td className="col-1">
								<Link to={'/detailstudent/' + item.id}>Detail</Link>
							</td>
							<td className="icon col-1">
								<FontAwesomeIcon icon={faPenToSquare} className="mr-2" onClick={()=> toEditStudent(item.id)}/>
								<FontAwesomeIcon icon={faTrashCan} onClick={()=> deleteStudent(item.id)}/>
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default ListStudent;