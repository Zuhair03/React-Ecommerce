import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../Components/Card/Card';
import Footer from '../Components/Footer/Footer';
import Menubar from '../Components/Menubar/Menubar';
import CarouselComponent from '../Components/Carousel/Carousel';
import "../Components/Global.css"

function Shop() {

    const images = [
        "https://via.placeholder.com/600x400?text=Image+1",
    ];

    const bestSellerProducts = [
        {
            id: 1,
            name: "Wireless Earbuds",
            category: "Electronics",
            price: 49.99,
            rating: 4.5,
            reviews: 1500,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Wireless+Earbuds"
        },
        {
            id: 2,
            name: "Smartwatch",
            category: "Electronics",
            price: 199.99,
            rating: 4.7,
            reviews: 3500,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Smartwatch"
        },
        {
            id: 3,
            name: "Instant Pot",
            category: "Home & Kitchen",
            price: 89.99,
            rating: 4.8,
            reviews: 5000,
            inStock: false,
            imageUrl: "https://via.placeholder.com/150?text=Instant+Pot"
        },
        {
            id: 4,
            name: "Running Shoes",
            category: "Sports & Outdoors",
            price: 120.00,
            rating: 4.6,
            reviews: 2200,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Running+Shoes"
        },
        {
            id: 5,
            name: "Gaming Laptop",
            category: "Computers",
            price: 1299.99,
            rating: 4.9,
            reviews: 1200,
            inStock: false,
            imageUrl: "https://via.placeholder.com/150?text=Gaming+Laptop"
        },
        {
            id: 6,
            name: "Blender",
            category: "Home & Kitchen",
            price: 59.99,
            rating: 4.3,
            reviews: 800,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Blender"
        },
        {
            id: 7,
            name: "Electric Toothbrush",
            category: "Personal Care",
            price: 39.99,
            rating: 4.4,
            reviews: 1400,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Electric+Toothbrush"
        },
        {
            id: 8,
            name: "Yoga Mat",
            category: "Sports & Outdoors",
            price: 25.99,
            rating: 4.2,
            reviews: 700,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Yoga+Mat"
        },
        {
            id: 9,
            name: "Noise-Cancelling Headphones",
            category: "Electronics",
            price: 299.99,
            rating: 4.7,
            reviews: 2400,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Noise+Cancelling+Headphones"
        },
        {
            id: 10,
            name: "Air Fryer",
            category: "Home & Kitchen",
            price: 99.99,
            rating: 4.5,
            reviews: 3300,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Air+Fryer"
        }
    ];


    const topRatedProducts = [
        {
            id: 1,
            name: "4K OLED TV",
            category: "Electronics",
            price: 1499.99,
            rating: 4.9,
            reviews: 1800,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=4K+OLED+TV"
        },
        {
            id: 2,
            name: "Professional Camera",
            category: "Electronics",
            price: 1999.99,
            rating: 4.8,
            reviews: 2500,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Professional+Camera"
        },
        {
            id: 3,
            name: "Memory Foam Mattress",
            category: "Home & Furniture",
            price: 899.99,
            rating: 4.7,
            reviews: 3000,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Memory+Foam+Mattress"
        },
        {
            id: 4,
            name: "Electric Scooter",
            category: "Sports & Outdoors",
            price: 499.99,
            rating: 4.7,
            reviews: 2000,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Electric+Scooter"
        },
        {
            id: 5,
            name: "Smart Refrigerator",
            category: "Appliances",
            price: 2499.99,
            rating: 4.6,
            reviews: 1500,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Smart+Refrigerator"
        },
        {
            id: 6,
            name: "Wireless Gaming Mouse",
            category: "Computers",
            price: 79.99,
            rating: 4.6,
            reviews: 1800,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Wireless+Gaming+Mouse"
        },
        {
            id: 7,
            name: "Noise-Cancelling Earbuds",
            category: "Electronics",
            price: 199.99,
            rating: 4.5,
            reviews: 2200,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Noise-Cancelling+Earbuds"
        },
        {
            id: 8,
            name: "Robot Vacuum Cleaner",
            category: "Home & Kitchen",
            price: 349.99,
            rating: 4.5,
            reviews: 2500,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Robot+Vacuum+Cleaner"
        },
        {
            id: 9,
            name: "Portable Power Bank",
            category: "Electronics",
            price: 39.99,
            rating: 4.4,
            reviews: 3000,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Portable+Power+Bank"
        },
        {
            id: 10,
            name: "Fitness Tracker Watch",
            category: "Fitness",
            price: 129.99,
            rating: 4.4,
            reviews: 2800,
            inStock: true,
            imageUrl: "https://via.placeholder.com/150?text=Fitness+Tracker+Watch"
        }
    ];

    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
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

                }
            }
        ]
    };

    return (<>
        <div className='container'>
            <Menubar />
            <div className="mt-4 position-relative">
                <CarouselComponent data={images} />
            </div>
            <div className="mt-4 position-relative">
                <Slider {...settings}>
                    {bestSellerProducts.map((product, index) => (
                        <Card productData={product} key={index} />
                    ))}
                </Slider>
            </div>
            <div className="mt-4 position-relative">
                <Slider {...settings}>
                    {topRatedProducts.map((product, index) => (
                        <Card productData={product} key={index} />
                    ))}
                </Slider>
            </div>
            <Footer />
        </div>
    </>
    )
}

export default Shop