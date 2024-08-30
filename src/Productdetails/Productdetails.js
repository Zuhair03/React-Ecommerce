import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Menubar from '../Components/Menubar/Menubar';
import { Tab } from 'bootstrap/dist/js/bootstrap.bundle.min';
import { Tabs } from 'react-bootstrap';
import ProductCard from '../Components/Card/Card';
import { AllProducts } from '../Shop/Products/Allproducts';
import { settings } from '../Home/settings';
import Slider from 'react-slick';

const Productdetails = ({ products }) => {
    let { id } = useParams();
    const product = products.find(item => item.id === parseInt(id, 10)); // Ensure `id` is compared correctly
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

    if (!product) {
        return <div>Product not found</div>;
    }
    console.log("product", product);
    return (
        <>
            <div className='conatainer'>
                <Menubar />
                <div className='container mt-5'>
                    <div className='row mt-5 mb-5'>
                        <div className='col-md-8 col-s-6 fluid'>
                            <div style={{ textAlign: "center" }}>
                                <img src={product?.imageUrl} alt={product?.name} style={{ height: "500px",  }} />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <h2>{product?.name}</h2>
                            <h3>${product?.price}</h3>
                            <button className='btn btn-primary m-3'>Buy Now</button>
                            <button className='btn btn-secondary'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 p-3' style={{ border: '2px solid black', textAlign: "start"}}>
                            <Tabs style={ {justifyContent: "center"}}>
                                <Tab eventKey="Description" title="Description">
                                    <h5>{product?.description}</h5>
                                </Tab>
                                <Tab eventKey="Review" title="Review">
                                    Tab content for Profile
                                </Tab>
                                <Tab eventKey="Rating" title="Rating">
                                    Tab content for Profile
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    {/* Mobile view with pagination */}
                    <div className='d-md-none col-12 mt-5 mx-auto'>
                        <div className="d-flex flex-wrap justify-content-center" style={{ width: "100%", gap: "10px" }}>
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
                            <button className="btn btn-outline-primary m-2" onClick={handlePrevious} disabled={currentPage === 1}>
                                Previous
                            </button>
                            <span>Page {currentPage} of {totalPages}</span>
                            <button className="btn btn-outline-primary m-2" onClick={handleNext} disabled={currentPage === totalPages}>
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Desktop view */}
                    <div className='col-12 d-none d-md-block mt-5'>
                        <div className='row'>
                            <Slider {...settings}>
                            {AllProducts.map((product, index) => (
                                <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' key={product.id}>
                                    <ProductCard
                                        productData={product}
                                        navigateToProducts={gotoProductDetails}
                                    />
                                </div>
                            ))}
                            </Slider>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Productdetails;
