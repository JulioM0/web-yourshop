import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './componentes/ProductList';
import ProductDetails from './componentes/ProductDetails';
import Checkout from './componentes/checkout';
import Cart from './componentes/cart';
import Header from './componentes/Header';

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [countProducts, setCountProducts] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const clearCart = () => {
    setAllProducts([]);
    setCountProducts(0);
    setTotal(0);
  };

  return (
    <Router>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="App">
        <Cart allProducts={allProducts} total={total} clearCart={clearCart} />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                total={total}
                setTotal={setTotal}
                searchTerm={searchTerm}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetails
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                total={total}
                setTotal={setTotal}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                allProducts={allProducts}
                total={total}
                clearCart={clearCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;