import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Detail from "./pages/Details";
import './App.css';
import AppNavbar from './components/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route exact path="/">
              <Route index element={<Home />} />
              <Route path="/detail" element={<Detail />} />
            </Route>
        </Routes>
      </BrowserRouter>

      <header>
        {[false].map((expand) => (
            <>
            <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Brand href="#">Reward Home</Navbar.Brand>
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
        <AppNavbar/>
    </div>
  );
}

export default App;
