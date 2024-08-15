import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import DetailStudent from "./pages/DetailStudent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeContent from "./pages/HomeContent";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import ListStudent from "./pages/ListStudent";
import ListProduct from "./pages/ListProduct";
import DetailProduct from "./pages/DetailProduct";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="" element={<HomeContent/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/students" element={<ListStudent/>}/>
          <Route path="/detailstudent/:id" element={<DetailStudent/>}/>
          <Route path="/addstudent" element={<AddStudent/>}/>
          <Route path="/editstudent/:id" element={<EditStudent/>}/>
          <Route path="/products" element={<ListProduct/>}/>
          <Route path="/detailproduct/:id" element={<DetailProduct/>}/>
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/editproduct/:id" element={<EditProduct/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
