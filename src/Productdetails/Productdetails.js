import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Menubar from '../Components/Menubar/Menubar';
import { Tab } from 'bootstrap/dist/js/bootstrap.bundle.min';
import { Tabs } from 'react-bootstrap';

const Productdetails = ({ products }) => {
    let { id } = useParams();
    const product = products.find(item => item.id === parseInt(id, 10)); // Ensure `id` is compared correctly

    if (!product) {
        return <div>Product not found</div>;
    }
    console.log("product", product);
    return (
        <>
            <Menubar />
            <div className='container mt-5'>
                <div className='row mt-5 mb-5'>
                    <div className='col-md-4'>
                        <div style={{ textAlign: "center" }}>
                            <img src={product?.imageUrl} alt={product?.name} />
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <h2>{product?.name}</h2>
                        <p>{product.description}</p>
                        <h3>${product.price}</h3>
                        <button className='btn btn-primary m-3'>Buy Now</button>
                        <button className='btn btn-secondary'>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'  style={{ border: '2px solid black' }}>
                        <Tabs>
                            <Tab eventKey="Description" title="Description">
                                Tab content for Home
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
            <Footer />
        </>
    );
};

export default Productdetails;
