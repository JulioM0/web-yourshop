import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductList from './componentes/ProductList';
import ProductDetails from './componentes/ProductDetails';
import Checkout from './componentes/checkout';
import Cart from './componentes/cart';
import Header from './componentes/Header';
import Login from './Login';
import Register from './Register';

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [countProducts, setCountProducts] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const clearCart = () => {
    setAllProducts([]);
    setCountProducts(0);
    setTotal(0);
  };

  return (
    <Router>
      {isAuthenticated && <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
      <div className="App">
        {isAuthenticated && <Cart allProducts={allProducts} total={total} clearCart={clearCart} />}
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <ProductList
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                  total={total}
                  setTotal={setTotal}
                  searchTerm={searchTerm}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/product/:id"
            element={
              isAuthenticated ? (
                <ProductDetails
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                  total={total}
                  setTotal={setTotal}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/checkout"
            element={
              isAuthenticated ? (
                <Checkout
                  allProducts={allProducts}
                  total={total}
                  clearCart={clearCart}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/home" : "/login"} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
