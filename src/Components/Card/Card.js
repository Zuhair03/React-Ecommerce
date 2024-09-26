import React from 'react';
import { Card } from 'react-bootstrap';
import "../Card/Card.css";

function ProductCard({ productData, navigateToProducts }) {
    console.log("productData", productData)
    const handleClick = () => {
        if (navigateToProducts) {
            navigateToProducts(productData);
        }
    };

    return (
        <Card className="product-card" onClick={handleClick}>
            <Card.Img className="hover-zoom" variant="top" src={productData?.product_image || "https://via.placeholder.com/150?text=Portable+Power+Bank"} />
            <Card.Body className="text-left">
                <div className="text-content">
                    <Card.Title>{productData?.product_name}</Card.Title>
                    <Card.Text>
                        <h6>SKU: {productData?.product_sku}</h6>
                        <h6>Barcode: {productData?.product_barcode}</h6>
                    </Card.Text>
                    <Card.Text>
                        <h5>Price: ${productData?.product_price}</h5>
                        {productData?.product_sellPrice && (
                            <h6>Sale Price: ${productData?.product_sellPrice}</h6>
                        )}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
