import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import Menubar from '../Components/Menubar/Menubar';
import CarouselComponent from '../Components/Carousel/Carousel';
import Footer from '../Components/Footer/Footer';

function Contact() {
    const images = [
        "https://via.placeholder.com/600x400?text=Image+1",
    ];
    return (
        <>
            <div className='container'>
                    <Menubar />
                <div className="mt-4 position-relative">
                    <div className="mt-4 position-relative">
                        <CarouselComponent data={images} />
                    </div>
                </div>
                <div className="row">
                    <div className='col-8 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                        <h4>
                            Address:-
                            Lajpur, Surat, Gujrat, India
                        </h4>
                    </div>
                    <div className='col-8 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                        <h4>
                            Address:- <br />
                            Sagrampura, Surat, Gujarat, India
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className='mt-3 map col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7446.455378309543!2d72.89490964530309!3d21.063566434363366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be059fb0c3e19fd%3A0x2471f79a87a44af1!2sLajpur%2C%20Gujarat%20394235!5e0!3m2!1sen!2sin!4v1721199307627!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Lajpur Location'></iframe>
                    </div>
                    <div className='mt-3 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Row>
                            <Row>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control type="number" placeholder="Contact" />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
