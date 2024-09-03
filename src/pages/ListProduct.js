import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";

const ListProduct = () => {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();
	const getProducts = () => {
		axios.get("https://api-product-demo-react.onrender.com/products").then(res => {
			setProducts(res.data);
		})
	}
	useEffect(() => {
		getProducts();
	},[]);

	const toAddProduct = () => {
		navigate("/addproduct");
	}
	const toEditProduct = (id) => {
		navigate(`/editproduct/${id}`);
	}
	const deleteProduct = (id) => {
		const isConfirm = window.confirm("Are you sure");
		if(isConfirm){
			axios.delete(`https://api-product-demo-react.onrender.com/products/${id}`).then(res => {
				alert("Deleted successfully!");
				getProducts();
			})
		}
	}
	return (
		<>
			<div className="row list">
				<div className="col-12 text-center"><h1>List Products</h1></div>
				<div className="col-12 text-center">
					<button className="btn btn-outline-primary mb-2" onClick={toAddProduct}>Add Product
					</button>
				</div>
				<table className="table table-hover">
					<thead className="thead-light">
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Name</th>
						<th scope="col">Price</th>
						<th scope="col">Quantity</th>
						<th className="col-1" scope="col"></th>
						<th className="col-1" scope="col"></th>
					</tr>
					</thead>
					<tbody>
					{products.map(item => (
						<tr>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.price}</td>
							<td>{item.quantity}</td>
							<td className="col-1">
								<Link to={`/detailproduct/${item.id}`}>Detail</Link>
							</td>
							<td className="icon col-1">
								<FontAwesomeIcon icon={faPenToSquare} className="mr-2" onClick={()=> toEditProduct(item.id)}/>
								<FontAwesomeIcon icon={faTrashCan} onClick={()=> deleteProduct(item.id)}/>
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default ListProduct;