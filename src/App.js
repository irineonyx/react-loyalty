import React, { useState } from 'react';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rewards from "./pages/Rewards";
import './App.css';
import AppNavbar from './components/Navbar'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import voucherData from './voucherdata.json';

function App() {
  const [show, setShow] = useState(false);
  const [defaultMenu, setDefaultMenu] = useState('home');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <>
    {/*
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Route path="/rewards" element={<Rewards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  */}

    <div className="App">
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
      
      <div className="appBody">
        <Card className="cardPoint">
          <Card.Body>
            <Card.Title>
              <Stack direction="horizontal">
                <div>Points Balance</div>
                <div className="ms-auto">0</div>
              </Stack>
            </Card.Title>
          </Card.Body>
        </Card>

        {
        voucherData.map((item,index) =>
          (
            <div className="voucherGroup" key="{index}">
              <div className="categoryWrapper">
                <h2 className="categoryName">{item['category']}</h2>
                <div className='categoryViewAll'>View all <FontAwesomeIcon icon={faAngleRight} /></div>
              </div>
              
              <Slider {...sliderSettings}>
              {
              item['items'].map((placeDetail,index2) =>
                (
                <div key="{index2}">
                  <Card className="categoryCard">
                    <Card.Img variant="top" src={placeDetail["image"]} />
                    <Card.Body>
                      <Card.Title>${placeDetail['amount']} eVoucher</Card.Title>
                      <Card.Text>
                        <div>{placeDetail['name']}</div>
                        <div>{placeDetail['location']}</div>
                        <div className="points">{placeDetail['points']} pts</div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                )
              )
              }
              </Slider>\
            </div>
          )
          )}
        
        
      </div> {/* end appBody */}
      
      
      <AppNavbar/>
    </div>
    </>
  );
}

export default App;
