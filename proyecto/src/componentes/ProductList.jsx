import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../datos';

const ProductList = ({ 
    allProducts, 
    setAllProducts, 
    countProducts, 
    setCountProducts, 
    total, 
    setTotal, 
    searchTerm // Añadido para la búsqueda
}) => {
    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + product.price);
            setCountProducts(countProducts + 1);
            return setAllProducts([...products]);
        }

        setTotal(total + product.price);
        setCountProducts(countProducts + 1);
        setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    };

    // Filtrar los productos según el término de búsqueda
    const filteredProducts = data.filter(product =>
        product.nameProduct.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='container-items'>
            {filteredProducts.map(product => (
                <div className='item' key={product.id}>
                    <figure>
                        <img src={product.img} alt={product.nameProduct} />
                    </figure>
                    <div className='info-product'>
                        <h2>{product.nameProduct}</h2>
                        <p className='price'>${product.price}</p>
                        <button onClick={() => onAddProduct(product)}>
                            Añadir al carrito
                        </button>
                        <Link to={`/product/${product.id}`} className="btn-details">
                            Ver detalles
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;