import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/home";
import Login from "./pages/login";
import Reg from "./pages/reg";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Admin from "./pages/admin";
import Adminproduct from "./pages/Adminproduct";
import { useDispatch, useSelector } from "react-redux";
import Singleproductviewuser from "./pages/singleproductviewuser";
import Cart from "./pages/cart";
import Productcart from "./pages/productcart";

import ThemeProvider from "react-bootstrap/ThemeProvider";
import Navbarr from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productcart" element={<Productcart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminproductview/:id" element={<Adminproduct />} />
          <Route
            path="/singleproductviewuser/:id"
            element={<Singleproductviewuser />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
