import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import "../Card/Card.css"

function Card({ productData }) {
    return (
        <div className="m-2">
            <BootstrapCard>
                <BootstrapCard.Img variant="top" src={productData?.imageUrl} />
                <BootstrapCard.Body className="text-center">
                    <BootstrapCard.Title>{productData?.name}</BootstrapCard.Title>
                    <BootstrapCard.Text>
                        <strong>Category:</strong> {productData?.category} <br/>
                        <strong>Price:</strong> ${productData?.price} <br/>
                        <strong>Rating:</strong> {productData?.rating} ({productData?.reviews} reviews)
                    </BootstrapCard.Text>
                    <Button variant="primary" disabled={!productData?.inStock}>
                        {productData?.inStock ? 'Buy Now' : 'Out of Stock'}
                    </Button>
                </BootstrapCard.Body>
            </BootstrapCard>
        </div>
    );
}

export default Card;
