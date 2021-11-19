import React from 'react';
import { Accordion, Alert } from 'react-bootstrap';
import image from './beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';
const Addvertisements = () => {
    return (
        <div className="px-5">
            <h3 className="text-center">Message from <span className="text-warning">US</span></h3>
            <Alert variant="info" className="px-5">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center  w-100">
                    <div className="me-3">
                        <img src={image} alt="" className="img-fluid rounded-circle img-thumbnail" width="250px" />
                    </div>
                    <div className="w-100">
                        <Accordion efaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>We know our Customers</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>We always research about their needs</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </Alert>
        </div>
    );
};

export default Addvertisements;