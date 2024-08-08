import React, { useEffect, useState } from 'react';
import Menubar from '../Components/Menubar/Menubar';
import Footer from '../Components/Footer/Footer';
import CarouselComponent from '../Components/Carousel/Carousel';
import "../Components/Global.css";
import { fetchData } from '../api';
import Slider from "react-slick";
import Card from '../Components/Card/Card';
import { bestSellerProducts } from '../Shop/Products/Bestseller';
import { topRatedProducts } from '../Shop/Products/Toprated';


function Home() {
    const [data, setData] = useState(null);
    const [error, setError] = useState('Please try again');

    const images = [
        "https://via.placeholder.com/600x400?text=Image+1",
    ];

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const result = await fetchData('https://catfact.ninja/fact');
            console.log(result);
            setData(result);
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    };

    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", zIndex: 2 }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

             {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            }
        ]
    };

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
                    {bestSellerProducts.map((product, index) => (
                        <div key={index} className="p-2">
                            <Card productData={product} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="mt-4 center">
                <div><h4>Top Rated Products</h4></div>
                <Slider {...settings}>
                    {topRatedProducts.map((product, index) => (
                        <div key={index} className="p-2">
                            <Card productData={product} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='mt-3'>
                {data ? <div>{data.fact}</div> : <div>{error}</div>}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
