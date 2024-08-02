import React from 'react';
import './footer.css';
import qubit from './qubit.png'
import blue from './blue.png'
import adopt from './ad.png'
import face from './facebok.png'
const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className='footer-section-1  container bg-light'>
                <div className='footer-left-content'>
                    <h2>A connected ecosystem.</h2>
                    <p>The Qubit personalization platform is designed with enterprise and high-growth businesses in mind.</p>
                    <p>Our open ecosystem approach means you can connect any data source and deliver personalization across any channel.</p>
                    <button className="integration-button">See our integrations</button>
                </div>
                <div className='footer-right-content'>
                    <img src={qubit} alt='Salesforce' className='qubit' />
                </div>
            </div>
            <div className=' footer-section-2 container'>
                <h1 className=' n text-center text-center text-white'>Book a demo today</h1>
                <div className='email-button'>
                    <input type="email" placeholder="Enter your email" className="emailing mx-auto "/>
                    <button className="demo-but">Book a demo</button>
                </div>
            </div>
            <div className='footer-section-3  bg-light container'>
                <img className='adoop ' src={adopt} alt=""/>
                <h4 className='text-center for-w mt-5'>Connect with us</h4>
                <img className='face  mt-5' src={face} alt=""/>
            </div >
            <div className='container footer-section-4'>
                <div className='row'>
                    <div className='col-md'>
                        <h6>Featured Capabilities</h6>
                        <p>A/B testing</p>
                        <p>Customer insights</p>
                        <p>Customer polling and feedback</p>
                        <p>Customer segmentation</p>
                        <p>Data collection</p>
                        <p>Ecommerce merchandising</p>
                    </div>
                    <div className='col-md'>
                        <p>Custom machine learning</p>
                        <p>Journey Personalization</p>
                        <p>Mobile app personalization</p>
                        <p>Cross-channel personalization</p>
                        <p>Social proofing</p>
                        <p>Website personalization</p>
                    </div>
                    <div className='col-md'>
                        <h6>Products</h6>
                        <p>1:1 Product recommendations</p>
                        <p>1:1 Product badging</p>
                        <p>1:1 Journey personalization</p>
                        <p>Personalized content</p>
                        <p>Product insights</p>
                    </div>
                    <div className='col-md'>
                        <h6>Resources</h6>
                        <p>Resources</p>
                        <p>Customers</p>
                        <p>Qubit Blog.</p>
                        <p>Glossary</p>
                    </div>
                    <div className='col-md'>
                        <h6>Company</h6>
                        <p>Why Qubit?</p>
                        <p>About us</p>
                        <p>Careers</p>
                        <p>Press</p>
                        <p>Contact</p>
                    </div>
                    <div className='col-md'>
                        <h6>Working with us</h6>
                        <p>Legal</p>
                    </div>
                </div>
                <div className='col-md-4 mx-auto mt-5 text-center'>
                    <h1 className='font-weight-bold '>Qubit</h1>
                    <p className='mt-5'>© 2021 Qubit. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
