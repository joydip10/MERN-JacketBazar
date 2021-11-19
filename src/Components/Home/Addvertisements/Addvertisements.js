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
                                    We have a strong relationship with our customers and we always look forward to connect to our customers. Our customers has always been proud of the products they use from us, therefore to make them proud and to keep them satisfied with our products, we always work harder to increase our standard and always keep us ahead in the market of JACKETs.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>We always research about their needs</Accordion.Header>
                                <Accordion.Body>
                                    Everyday, huge changes are being brought in the markets. Leather markets shifted recently from the traditional viewpoint to the dynamic style sensations. We always conduct researches on these style trends and also from the scientific significance of the clothing industry. We thus offer you the best fabric but in very low and affordable prices.
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