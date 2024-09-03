import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditStudent = () => {
	const [student, setStudent] = useState({name:"",score:"",description:"",action:""});

	const navigate = useNavigate();
	let {id} = useParams();
	useEffect(() => {
		axios.get(`https://api-student-demo.onrender.com/students/${id}`).then((res) => {
			setStudent(res.data);
		})
	}, []);

	const onSubmitEdit = () => {
		axios.put(`https://api-student-demo.onrender.com/students/${id}`,student).then(() => {
			alert("Successfully update!");
			navigate("/students");
		})
	}

	const cancelEdit = () => {
		navigate("/students");
	}

	const onChangeName = (event) => {
		setStudent({...student, name: event.target.value});
	}
	const onChangeScore = (event) => {
		setStudent({...student, score: event.target.value});
	}
	const onChangeDesc = (event) => {
		setStudent({...student, description: event.target.value});
	}
	const onChangeAction = (event) => {
		setStudent({...student, action: event.target.value});
	}

	return (
		<>
			<div className="row">
				<div className="col-12 text-center"><h2>Edit Student</h2></div>
				<form className="col-12">
					<div className="form-group">
						<label>ID</label>
						<input type="text" className="form-control" value={student.id}
						       placeholder="Enter student's name" readOnly={true}/>
					</div>
					<div className="form-group">
						<label>Name</label>
						<input type="text" className="form-control" value={student.name}
						       onChange={e => onChangeName(e)}
						       placeholder="Enter student's name"/>
					</div>
					<div className="form-group">
						<label>Score</label>
						<input type="text" className="form-control" value={student.score}
						       onChange={e => onChangeScore(e)}
						       placeholder="Enter student's score"/>
					</div>
					<div className="form-group">
						<label>Description</label>
						<input type="text" className="form-control" value={student.description}
						       onChange={e => onChangeDesc(e)}
						       placeholder="Enter student's description"/>
					</div>
					<div className="form-group">
						<label>Action</label>
						<input type="text" className="form-control" value={student.action}
						       onChange={e => onChangeAction(e)}
						       placeholder="Enter student's action"/>
					</div>
					<div className="col-12 d-flex justify-content-between">
						<button type="button" className="btn btn-primary col-4" onClick={onSubmitEdit}>Submit</button>
						<button type="button" className="btn btn-outline-primary col-4" onClick={cancelEdit}>Cancel</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default EditStudent;