import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Carousel/Carousel.css'
function CarouselComponent({ data }) {

    return (
        <Carousel>
            {data?.length > 0 && data.map((image, index) => (
                <Carousel.Item key={index}>
                    <img className='w-100' src={image} alt="" />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
export default CarouselComponent