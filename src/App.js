import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import DetailProduct from "./components/DetailProduct";
import Login from "./components/Login";
import Register from "./components/Register";
import HomeContent from "./components/HomeContent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/" element={<HomeContent/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/detail" element={<DetailProduct/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;
