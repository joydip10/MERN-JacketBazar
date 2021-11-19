import React from 'react';
import { Navbar, Button, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from './../../../Hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/home" className="text-success">Jacket Bazar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        {
                            (!user.email) && <Button as={Link} to="/login">Login</Button>
                        }
                        {
                            (user.email) && <Button onClick={logout}>Logout</Button>
                        }
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end align-items-center text-center">
                    {
                        (user.displayName) &&
                        <Navbar.Text>
                            Signed in as:{user.displayName}
                        </Navbar.Text>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;