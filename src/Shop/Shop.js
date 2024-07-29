import React from 'react';

import Footer from '../Components/Footer/Footer';
import Menubar from '../Components/Menubar/Menubar';
import "../Components/Global.css";
import ProductCard from '../Components/Card/Card';
import { AllProducts } from './Products/Allproducts';
import Sidebar from '../Components/Sidebar/Sidebar';
function Shop() {
    return (<>
        <div className='container'>
            <Menubar />
         
            <div className='row'>
                <div className='col-4 '>
                <Sidebar/>
                </div>
                <div className=' product col-8'>

                    {AllProducts.map((product, index) => (
                        <ProductCard productData={product} key={index} />
                    ))}

                </div>
            </div>
            <Footer />
        </div>
    </>
    )
}

export default Shop