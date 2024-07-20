import React from 'react'
import Menubar from '../Components/Menubar/Menubar'
import Footer from '../Components/Footer/Footer'
import CarouselComponent from '../Components/Carousel/Carousel';

function Home() {
    const images = [
        "https://via.placeholder.com/600x400?text=Image+1",
    ];
    return (
        <div className='container'>
            <Menubar />
            <div className="mt-4 position-relative">
                <CarouselComponent data={images} />
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 col-md-6 col-lg-4 col-xl-4'>
                        <ul>
                            <li> One</li>
                            <li> Two</li>
                            <li> Three</li>
                        </ul>
                    </div>
                    <div className='col-6 col-md-6 col-lg-4 col-xl-4'>
                        <ul>
                            <li> One</li>
                            <li> Two</li>
                            <li> Three</li>
                        </ul>
                    </div>
                    <div className='col-6 col-md-6 col-lg-4 col-xl-4'>
                        <ul>
                            <li> One</li>
                            <li> Two</li>
                            <li> Three</li>
                        </ul>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Home
