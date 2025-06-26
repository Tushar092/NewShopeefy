// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import ProductList from "./Components/ProductList.jsx";
import Seller from "./Components/Seller.jsx";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/seller" element={<Seller />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
