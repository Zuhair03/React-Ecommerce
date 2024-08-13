// Shop.js
import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer/Footer';
import Menubar from '../Components/Menubar/Menubar';
import ProductCard from '../Components/Card/Card';
import { AllProducts } from './Products/Allproducts';
import Sidebar from '../Components/Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function Shop() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;
    const navigate = useNavigate(); // Initialize navigate

    // Calculate the indexes for slicing the products array
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = AllProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(AllProducts.length / productsPerPage);

    // Scroll to the top whenever the currentPage changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const gotoProductDetails = (product) => {
        navigate(`/product/${product.id}`);
    };
    
    return (
        <>
            <div className='container'>
                <Menubar />
                <div className='row'>
                    <div className='col-12 col-md-4 col-lg-3'>
                        <Sidebar />
                    </div>

                    {/* Mobile view with pagination */}
                    <div className='d-md-none col-12 mt-5 mx-auto'>
                        <div className="d-flex flex-wrap justify-content-center" style={{ width: "100%", gap: "20px" }}>
                            {currentProducts.map((product, index) => (
                                <ProductCard 
                                    productData={product} 
                                    key={product.id} 
                                    navigateToProducts={gotoProductDetails} 
                                />
                            ))}
                        </div>

                        {/* Breadcrumb for pagination */}
                        <div className="d-flex justify-content-between mt-4">
                            <button className="btn btn-outline-primary" onClick={handlePrevious} disabled={currentPage === 1}>
                                Previous
                            </button>
                            <span>Page {currentPage} of {totalPages}</span>
                            <button className="btn btn-outline-primary" onClick={handleNext} disabled={currentPage === totalPages}>
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Desktop view */}
                    <div className='col-12 d-none d-md-block mt-5'>
                        <div className='row gy-4'>
                            {AllProducts.map((product, index) => (
                                <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' key={product.id}>
                                    <ProductCard 
                                        productData={product} 
                                        navigateToProducts={gotoProductDetails} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Shop;
