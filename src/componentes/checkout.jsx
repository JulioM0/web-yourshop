import React, { useState } from 'react';
import PaypalButton from './PaypalButton';

const Checkout = ({ allProducts, total, clearCart }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        paymentMethod: 'credit-card',
        cardNumber: '',
        cardExpiry: '',
        cardCVC: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (formData.paymentMethod === 'credit-card') {
            console.log('Procesando pago con tarjeta de crédito...');
            clearCart();
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address">Dirección</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="paymentMethod">Método de Pago</label>
                    <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        required
                    >
                        <option value="credit-card">Tarjeta de Crédito</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank-transfer">Transferencia Bancaria</option>
                    </select>
                </div>
                {formData.paymentMethod === 'credit-card' && (
                    <div className="card-details">
                        <div>
                            <label htmlFor="cardNumber">Número de Tarjeta</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="cardExpiry">Fecha de Expiración</label>
                            <input
                                type="text"
                                id="cardExpiry"
                                name="cardExpiry"
                                value={formData.cardExpiry}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="cardCVC">CVC</label>
                            <input
                                type="text"
                                id="cardCVC"
                                name="cardCVC"
                                value={formData.cardCVC}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                )}
                <h3>Total: ${total}</h3>
                {formData.paymentMethod === 'paypal' ? (
                    <PaypalButton amount={total} />
                ) : (
                    <button type="submit">Completar Compra</button>
                )}
            </form>
        </div>
    );
};

export default Checkout;