import React, { useEffect, useState } from 'react';
import Menubar from '../Components/Menubar/Menubar';
import Footer from '../Components/Footer/Footer';
import CarouselComponent from '../Components/Carousel/Carousel';
import "../Components/Global.css";
import {  fetchProduct, } from '../api';
import Slider from "react-slick";
import Card from '../Components/Card/Card';
import { settings } from './settings';



function Home() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('Please try again');

    const images = [
        "https://via.placeholder.com/600x400?text=Image+1",
    ];

    useEffect(() => {
        fetchProductData();
    }, []);

    
    const fetchProductData = async () => {
        try{
            const result = await  fetchProduct("http://localhost:3000/api/products");
            console.log(result);
            setData(result);
        }
        catch (error) {
            setError(error.message);
            console.error('Error fetching Product Data:', error);
        }
    
    };

    console.log("fill data", data)
    return (
        <div className='container'>
            <Menubar />
            <div className="mt-4">
                <CarouselComponent data={images} />
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <ul>
                            <li>One</li>
                            <li>Two</li>
                            <li>Three</li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-4'>
                        <ul>
                            <li>One</li>
                            <li>Two</li>
                            <li>Three</li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-4'>
                        <ul>
                            <li>One</li>
                            <li>Two</li>
                            <li>Three</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-4 center">
                <div><h4>Best Seller Products</h4></div>
                <Slider {...settings}>
                    {data.map((product, index) => (
                        <div key={index} >
                            <Card productData={product} />
                        </div>
                    ))}
                </Slider>

                <div className='mt-4'><h4>Top Rated Products</h4></div>
                <Slider {...settings}>
                    {data.map((product, index) => (
                        <div key={index}>
                            <Card productData={product} />
                        </div>
                    ))}
                </Slider>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
