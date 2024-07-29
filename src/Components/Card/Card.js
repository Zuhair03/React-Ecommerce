import React from 'react';
import { Card } from 'react-bootstrap';
import "../Card/Card.css";

function ProductCard({ productData }) {
    return (
        <div>
            <Card className="product-card">
                <Card.Img className='hover-zoom' variant="top" src={productData?.imageUrl} />
                <Card.Body className="text-left">
                    <div className="text-content">
                        <Card.Title>{productData?.name}</Card.Title>
                        <Card.Text>
                            <h4>{productData?.category}</h4>
                        </Card.Text>
                        <Card.Text>
                            <h5>${productData?.price}</h5>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;
