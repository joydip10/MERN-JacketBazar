import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const NoPageFound = () => {
    return (
        <div>
            <Header/>
            <div className="text-center">
            <img src="https://cdn4.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.jpg" alt="" className="img-fluid img-thumbnail rounded-circle"/>
            </div>
            <Footer/>
        </div>
    );
};

export default NoPageFound;