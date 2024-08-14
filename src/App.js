import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import DetailProduct from "./pages/DetailProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeContent from "./pages/HomeContent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="" element={<HomeContent/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/detail/:id" element={<DetailProduct/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
