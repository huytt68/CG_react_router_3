import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
	const [product, setProduct] = useState({})
	const navigate = useNavigate();
	let {id} = useParams();
	useEffect(() => {
		axios.get('https://api-product-demo-react.onrender.com/products/'+id).then(res => {
			setProduct(res.data);
		})
	},[])

	const toBackProduct = () => {
		navigate("/products");
	}

	return (
		<>
			<div className="row">
				<div className="col-12 text-center"><h1>Detail Student</h1></div>
				<table className="table table-striped">
					<tbody>
					<tr>
						<th scope="row">ID</th>
						<td>{product.id}</td>
					</tr>
					<tr>
						<th scope="row">Name</th>
						<td>{product.name}</td>
					</tr>
					<tr>
						<th scope="row">Price</th>
						<td>{product.price}</td>
					</tr>
					<tr>
						<th scope="row">Quantity</th>
						<td>{product.quantity}</td>
					</tr>
					</tbody>
				</table>
			</div>
			<div className="row">
				<div className="col-12">
					<button type="button" className="btn btn-outline-primary col-3" onClick={toBackProduct}>Back</button>
				</div>
			</div>
		</>
	)
}

export default DetailProduct;