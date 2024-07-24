import React, { useEffect, useState } from 'react'
import Menubar from '../Components/Menubar/Menubar'
import Footer from '../Components/Footer/Footer'
import CarouselComponent from '../Components/Carousel/Carousel';
import { fetchData } from '../api';

function Home() {
    const [data, setData] = useState(null);
    const [error, setError] = useState('pleas try again');

    const images = [
        "https://via.placeholder.com/600x400?text=Image+1",
    ];

    useEffect(() => {
        loadData();
    }, []);
    const loadData = async () => {
        try {
            const result = await fetchData('https://catfact.ninja/fact');
            console.log(result)
            setData(result);
        } catch (error) {
            setError(error.message);
            console.log(error)
        }
    };



  
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
            <div className='mt-3'>
                {data &&
                    <div>{data?.fact}</div>
                }
                {!data &&
                    <div>{error}</div>
                }
                

            </div>
            <Footer />
        </div>
    )
}

export default Home
