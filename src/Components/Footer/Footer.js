import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <>
            <div className='footer mt-4'>
                <div className='container'>
                    <div className='row'>
                        <div className=' ft-1 col-12 col-md-6 col-lg-5'>
                            <h2> Ecommerce</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam porro, fugit dicta, dolorum perferendis pariatur ducimus animi ea molestiae, quis tenetur consequuntur magni necessitatibus! Numquam molestiae sit quis dolore autem.</p>
                            <div className='footer-icons'>
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                        </div>
                        <div className=' ft-2 col-12 col-md-6 col-lg-4'>
                            <h3> Quick Links</h3>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Shop</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className=' ft-3 col-12 col-md-6 col-lg-3'>
                            <h3>Contact Info</h3>
                            <p> <i className="fa-solid fa-phone-volume"></i> +91 8485939239</p>
                            <p> <i className="fa-solid fa-envelope"></i> zuhairtailor3@gmail.com</p>
                            <p> <i className="fa-regular fa-paper-plane"></i> Lajpur, Surat, Gujarat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Designed By Zuhair</p>
            </div>
        </>
    )
}

export default Footer
