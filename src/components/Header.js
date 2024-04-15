import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>GameStack</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2 my-3" /> 
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-3">
                        <LinkContainer to="/" className='px-4 py-2'>
                            <Nav.Link className='py-7 px-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-xl cursor-pointer hover:from-gray-500 hover:to-gray-600 hover:shadow-lg hover:animate-pulse transition duration-300'>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/games" className='px-4 py-2'>
                            <Nav.Link className='py-7 px-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-xl cursor-pointer hover:from-gray-500 hover:to-gray-600 hover:shadow-lg hover:animate-pulse transition duration-300'>Games</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
