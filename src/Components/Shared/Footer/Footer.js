import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark bg-gradient py-3 text-center mt-3">
            <h2 className="text-white" style={{ cursor: 'pointer' }}><span className="text-warning"> Jacket </span>Bazar</h2>
            <h5 className="mt-0 py-0 text-warning">Spend Less <span className="text-muted">but Buy the Best</span></h5>
            <h3><i className="fab fa-google text-danger"></i>{'  '}<i className="fab fa-facebook text-white"></i>{'  '}<i className="fab fa-github text-success"></i>{'  '}<i className="fab fa-instagram-square text-warning"></i>{'  '}<i className="fab fa-twitter-square text-primary"></i></h3>
        </div>
    );
};

export default Footer;