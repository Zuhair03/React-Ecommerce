import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Menubar from '../Components/Menubar/Menubar';
import ProductCard from '../Components/Card/Card';
import { AllProducts } from '../Shop/Products/Allproducts';

function Productdetails() {
    const location = useLocation();
    const product = location.state?.productData; // Get the passed product data

    if (!product) {
        return <p>Product not found.</p>;
    }

    // Filter out the current product from the list of all products
    const otherProducts = AllProducts.filter(p => p.id !== product.id);

    return (
        <>
            <Menubar />
            <div className="container mt-5">
                <div className="row">
                    {/* Product Details Section */}
                    <div className="col-md-8 mt-4">
                        <h2>{product.name}</h2>
                        <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="img-fluid mb-3" 
                            style={{ maxWidth: '100%', height: 'auto' }} 
                        />
                        <p>{product.description || 'No description available'}</p>
                    </div>

                    {/* Actions Section */}
                    <div className="col-md-4 mt-4">
                        <div className="d-flex flex-column">
                            <button className="btn btn-primary mb-3">Add to Cart</button>
                            <button className="btn btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>

                {/* Other Products Section */}
                <div className="row mt-5">
                    <h3>Other Products</h3>
                    <div className="d-flex flex-wrap justify-content-between">
                        {otherProducts.map((product, index) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                                <ProductCard productData={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Productdetails;
