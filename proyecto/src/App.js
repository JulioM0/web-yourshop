import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header.jsx';
import ProductList from './componentes/ProductList.jsx';
import ProductDetails from './componentes/ProductDetails.jsx';
import { data } from './datos';

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState(data);

    const handleSearch = (term) => {
        if (term === '') {
            setFilteredProducts(data);
        } else {
            setFilteredProducts(data.filter(product => 
                product.nameProduct.toLowerCase().includes(term.toLowerCase())
            ));
        }
    };

    return (
        <Router>
            <div>
                <Header
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    total={total}
                    setTotal={setTotal}
                    countProducts={countProducts}
                    setCountProducts={setCountProducts}
                    onSearch={handleSearch}
                />
                <Routes>
                    <Route path="/" element={
                        <ProductList
                            allProducts={allProducts}
                            setAllProducts={setAllProducts}
                            total={total}
                            setTotal={setTotal}
                            countProducts={countProducts}
                            setCountProducts={setCountProducts}
                            products={filteredProducts}
                        />
                    } />
                    <Route path="/product/:id" element={
                        <ProductDetails
                            allProducts={allProducts}
                            setAllProducts={setAllProducts}
                            total={total}
                            setTotal={setTotal}
                            countProducts={countProducts}
                            setCountProducts={setCountProducts}
                        />
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;