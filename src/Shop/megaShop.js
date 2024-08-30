import React, { useState } from 'react';
import "./megaShop.css";
import { Flex } from '@chakra-ui/react';
import directBankImg from "../assets/direct-bank.png";
import directBankActiveImg from "../assets/direct-bank-active.png";
import checkPaymentImg from "../assets/check-payments.png";
import checkPaymentActiveImg from "../assets/check-payments-active.png";
import codImg from "../assets/cash-on-delivery.png";
import codActiveImg from "../assets/cash-on-delivery-active.png";
import paypalImg from "../assets/paypal.png";
import paypalActiveImg from "../assets/paypal-active.png";

function MegaShop() {
    const [selectedPayment, setSelectedPayment] = useState('');

    const paymentOptions = [
        {
            id: 'bank',
            name: 'Direct bank transfer',
            img: directBankImg,
            selectedImg: directBankActiveImg,
            info: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
        },
        {
            id: 'check',
            name: 'Check payments',
            img: checkPaymentImg,
            selectedImg: checkPaymentActiveImg,
            info: 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.',
        },
        {
            id: 'cod',
            name: 'Cash on delivery',
            img: codImg,
            selectedImg: codActiveImg,
            info: 'Pay with cash upon delivery.',
        },
        {
            id: 'paypal',
            name: 'PayPal',
            img: paypalImg,
            selectedImg: paypalActiveImg,
            info: 'Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.',
        },
    ];

    const handleSelectPayment = (id) => {
        setSelectedPayment(id);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h3 className="checkout-payment-info-heading">Payment information</h3>
                    {paymentOptions.map(option => (
                        <React.Fragment key={option.id}>
                            <div
                                className={`d-flex align-items-center mt-3 p-2 border ${selectedPayment === option.id ? 'border-primary' : 'border-secondary'}`}
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleSelectPayment(option.id)}
                            >
                                <img
                                    src={selectedPayment === option.id ? option.selectedImg : option.img}
                                    alt={option.name}
                                    className="img-fluid"
                                    style={{ maxWidth: '50px', marginRight: '15px' }}
                                />
                                <span>{option.name}</span>
                            </div>
                            {selectedPayment === option.id && (
                                <div className="mt-3 p-3 border border-primary">
                                    <p>{option.info}</p>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className='col-md-6'>
                    {/* Add any other content here */}
                </div>
            </div>
        </div>
    );
}

export default MegaShop;
