import React from 'react';
import Footer from '../Components/Footer/Footer';
import Menubar from '../Components/Menubar/Menubar';
import "../Components/Global.css";
import ProductCard from '../Components/Card/Card';
import { AllProducts } from './Products/Allproducts';
import Sidebar from '../Components/Sidebar/Sidebar';

function Shop() {
    return (
        <>
            <div className='container'>
                <Menubar />
                <div className='row'>
                    <div className='col-12 col-md-4 col-lg-3'>
                        <Sidebar />
                    </div>
                    
                    {/* This div will be displayed only on mobile screens */}
                    <div className='d-md-none col-12 mt-5 mx-auto d-flex justify-content-center' style={{ backgroundColor: "red" }}>
                        <div className="d-flex flex-wrap justify-content-center" style={{ width: "100%" }}>
                            {AllProducts.map((product, index) => (
                                <ProductCard productData={product} key={index} />
                            ))}
                        </div>
                    </div>

                    {/* Desktop view */}
                    <div className='col-12 d-none d-md-block mt-5'>
                        <div className='row gy-4'>
                            {AllProducts.map((product, index) => (
                                <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' key={index}>
                                    <ProductCard productData={product} />
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
