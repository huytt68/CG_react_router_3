import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddProduct = () => {
	const [newProduct, setNewProduct] = useState({name:"",price:"",quantity:""});
	const navigate = useNavigate();

	const onSubmitAdd = () => {
		axios.post("http://localhost:5001/products",newProduct).then(() => {
			alert("Successfully added!");
			navigate("/products");
		})
	}

	const cancelAdd = () => {
		navigate("/products");
	}

	const onChangeName = (event) => {
		setNewProduct({...newProduct, name: event.target.value});
	}
	const onChangePrice = (event) => {
		setNewProduct({...newProduct, price: event.target.value});
	}
	const onChangeQuantity = (event) => {
		setNewProduct({...newProduct, quantity: event.target.value});
	}

	return (
		<>
			<div className="row">
				<div className="col-12 text-center"><h2>Add Product</h2></div>
				<form className="col-12">
					<div className="form-group">
						<label>Name</label>
						<input type="text" className="form-control" value={newProduct.name}
						       onChange={e=> onChangeName(e)}
						       placeholder="Enter product's name"/>
					</div>
					<div className="form-group">
						<label>Price</label>
						<input type="text" className="form-control" value={newProduct.price}
						       onChange={e=>onChangePrice(e)}
						       placeholder="Enter product's price"/>
					</div>
					<div className="form-group">
						<label>Quantity</label>
						<input type="text" className="form-control" value={newProduct.quantity}
						       onChange={e=>onChangeQuantity(e)}
						       placeholder="Enter product's quantity"/>
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

export default AddProduct;