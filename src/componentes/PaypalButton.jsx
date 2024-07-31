
import React, { useEffect, useRef } from 'react';

const PaypalButton = ({ amount }) => {
    const paypalRef = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: amount,
                            },
                        },
                    ],
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    alert('Transaction completed by ' + details.payer.name.given_name);
                });
            },
            onError: (err) => {
                console.error(err);
            }
        }).render(paypalRef.current);
    }, [amount]);

    return <div ref={paypalRef}></div>;
};

export default PaypalButton;