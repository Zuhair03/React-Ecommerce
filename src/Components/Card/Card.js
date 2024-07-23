import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "../Card/Card.css";

function ProductCard({ productData }) {
    return (
        <div>
            <Card className="product-card">
                <Card.Img variant="top" src={productData?.imageUrl} />
                <Card.Body className="text-center">
                    <Card.Title>{productData?.name}</Card.Title>
                    <Card.Text>
                        <strong>Category:</strong> {productData?.category} <br />
                        <strong>Price:</strong> ${productData?.price} <br />
                        <strong>Rating:</strong> {productData?.rating} ({productData?.reviews} reviews)
                    </Card.Text>
                    <Button variant="primary" disabled={!productData?.inStock}>
                        {productData?.inStock ? 'Buy Now' : 'Out of Stock'}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;
