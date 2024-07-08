import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../datos';

const ProductDetails = ({ 
    allProducts, 
    setAllProducts, 
    countProducts, 
    setCountProducts, 
    total, 
    setTotal 
}) => {
    const { id } = useParams();
    const product = data.find(product => product.id === parseInt(id));

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

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className='product-details'>
            <img className='ImgProduct' src={product.img} alt={product.nameProduct} />
            <h2>{product.nameProduct}</h2>
            <p className='descripcion'>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
                Añadir al carrito
            </button>
        </div>
    );
};

export default ProductDetails;