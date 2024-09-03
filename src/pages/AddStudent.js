import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddStudent = () => {
	const [newStudent, setNewStudent] = useState({name:"",score:"",description:"",action:""});
	const navigate = useNavigate();

	const onSubmitAdd = () => {
		axios.post("https://api-student-demo.onrender.com/students",newStudent).then(() => {
			alert("Successfully added!");
			navigate("/students");
		})
	}

	const cancelAdd = () => {
		navigate("/students");
	}

	const onChangeName = (event) => {
		setNewStudent({...newStudent, name: event.target.value});
	}
	const onChangeScore = (event) => {
		setNewStudent({...newStudent, score: event.target.value});
	}
	const onChangeDesc = (event) => {
		setNewStudent({...newStudent, description: event.target.value});
	}
	const onChangeAction = (event) => {
		setNewStudent({...newStudent, action: event.target.value});
	}

	return (
		<>
			<div className="row">
				<div className="col-12 text-center"><h2>Add Student</h2></div>
				<form className="col-12">
					<div className="form-group">
						<label>Name</label>
						<input type="text" className="form-control" value={newStudent.name}
						       onChange={e=> onChangeName(e)}
						       placeholder="Enter student's name"/>
					</div>
					<div className="form-group">
						<label>Score</label>
						<input type="text" className="form-control" value={newStudent.score}
						       onChange={e=>onChangeScore(e)}
						       placeholder="Enter student's score"/>
					</div>
					<div className="form-group">
						<label>Description</label>
						<input type="text" className="form-control" value={newStudent.description}
						       onChange={e=>onChangeDesc(e)}
						       placeholder="Enter student's description"/>
					</div>
					<div className="form-group">
						<label>Action</label>
						<input type="text" className="form-control" value={newStudent.action}
						       onChange={e=>onChangeAction(e)}
						       placeholder="Enter student's action"/>
					</div>
					<div className="col-12 d-flex justify-content-between">
						<button type="button" className="btn btn-primary col-4" onClick={onSubmitAdd}>Add</button>
						<button type="button" className="btn btn-outline-primary col-4" onClick={cancelAdd}>Cancel</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default AddStudent;