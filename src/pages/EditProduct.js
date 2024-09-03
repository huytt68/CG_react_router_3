import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditProduct = () => {
	const [product, setProduct] = useState({name:"",price:"",quantity:""});

	const navigate = useNavigate();
	let {id} = useParams();
	useEffect(() => {
		axios.get(`https://api-product-demo-react.onrender.com/products/${id}`).then((res) => {
			setProduct(res.data);
		})
	}, []);

	const onSubmitEdit = () => {
		axios.put(`https://api-product-demo-react.onrender.com/products/${id}`,product).then(() => {
			alert("Successfully update!");
			navigate("/products");
		})
	}

	const cancelEdit = () => {
		navigate("/products");
	}

	const onChangeName = (event) => {
		setProduct({...product, name: event.target.value});
	}
	const onChangePrice = (event) => {
		setProduct({...product, price: event.target.value});
	}
	const onChangeQuantity = (event) => {
		setProduct({...product, quantity: event.target.value});
	}

	return (
		<>
			<div className="row">
				<div className="col-12 text-center"><h2>Edit Product</h2></div>
				<form className="col-12">
					<div className="form-group">
						<label>ID</label>
						<input type="text" className="form-control" value={product.id}
						       placeholder="Enter product's name" readOnly={true}/>
					</div>
					<div className="form-group">
						<label>Name</label>
						<input type="text" className="form-control" value={product.name}
						       onChange={e => onChangeName(e)}
						       placeholder="Enter product's name"/>
					</div>
					<div className="form-group">
						<label>Price</label>
						<input type="text" className="form-control" value={product.price}
						       onChange={e => onChangePrice(e)}
						       placeholder="Enter product's price"/>
					</div>
					<div className="form-group">
						<label>Quantity</label>
						<input type="text" className="form-control" value={product.quantity}
						       onChange={e => onChangeQuantity(e)}
						       placeholder="Enter product's quantity"/>
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

export default EditProduct;