import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    const location = useLocation();
    const [navbarTitle, setNavbarTitle] = useState('Home')

    React.useEffect(()=>
    { 
        if(location.pathname == '/'){
            setNavbarTitle('Home')
        }
        else if(location.pathname == '/rewards'){
            setNavbarTitle('Rewards')
        }
        else if(location.pathname == '/detail'){
            setNavbarTitle('Redeem')
        }
    },[location])
    return (
        <header>
        {[false].map((expand) => (
            <>
            <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Brand href="#">{navbarTitle}</Navbar.Brand>
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Navigation
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Link 1</Nav.Link>
                    <Nav.Link href="#action2">Link 2</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
            </>
            ))}
        </header>
    )
  }
  
  export default Header