import React from 'react';
import './header.css';
import img from './qubit.png'

const Header = () => {
    return (
       <div className='container'>
           <nav className="navbar navbar-expand-lg navbar-light bg-light container">
               <div className="container-fluid">
                   <a className="navbar-brand" href="#">
                       <img className="navbar-logo" src={img} alt="Logo" />
                   </a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"/>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                               <a className="nav-link" href="#">Why Qubit?</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#">Products</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#">Solutions</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#">Customers</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#">Case Studies</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#">Resources</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#">More</a>
                           </li>
                       </ul>
                       <div className="d-flex">
                           <button className="btn  navbar-button" type="button">Book a demo</button>
                           <a className="btn " href="#">Log In</a>
                       </div>
                   </div>
               </div>
           </nav>

           <div className="section container">
               <div className="content">
                   <div className="text-content col-6">
                       <p>Driving growth with personalization.</p>
                       <h1 className='txt-1'>Make ecommerce <br/> <span>More personal.</span></h1>
                       <p className='p-txt'>Hundreds of brands use <strong>Qubit CommerceAI</strong> to power the next generation of product recommendations, badging, and insights to build exceptional customer experiences.</p>
                       <div className="form-container">
                           <input type="email" placeholder="Enter your email"/>
                           <button type='button' className='btn navbar-button'>Book a demo</button>
                       </div>
                   </div>

               </div>
           </div>
       </div>




);
}
export default Header