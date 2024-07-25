import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ allProducts, total, clearCart }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {allProducts.map((product, index) => (
          <li key={index}>
            {product.nameProduct} - ${product.price} x {product.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/checkout">
        <button>Proceder al Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
