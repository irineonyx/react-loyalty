import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Offcanvas from 'react-bootstrap/Offcanvas';
import voucherData from '../voucherdata.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Rewards = () => {
    const [showFilterCategory, setShowFilterCategory] = useState(false);
    const handleCloseCategory = () => setShowFilterCategory(false);
    const handleShowCategory = () => setShowFilterCategory(true);
    const [showFilterSort, setShowFilterSort] = useState(false);
    const handleCloseSort = () => setShowFilterSort(false);
    const handleShowSort = () => setShowFilterSort(true);
    const [filterCategory, setFilterCategory] = useState('All');
    const [filterSort, setFilterSort] = useState('Latest');

    function OffCanvasCategory({ ...props }) {
        return (
          <>
            <Offcanvas className='oc-filter' show={showFilterCategory} onHide={handleCloseCategory} {...props}>
              <Offcanvas.Header>
                <Offcanvas.Title>Category</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className='oc-filter-item' onClick={() => setCategory('All')}>All Rewards</div>
                <div className='oc-filter-item' onClick={() => setCategory('Food & Beverage')}>Food & Beverage</div>
                <div className='oc-filter-item' onClick={() => setCategory('Shop & Play')}>Shop & Play</div>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );
    }
    function OffCanvasSort({ ...props }) {
        return (
          <>
            <Offcanvas className='oc-filter' show={showFilterSort} onHide={handleCloseSort} {...props}>
              <Offcanvas.Header>
                <Offcanvas.Title>Sort By</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className='oc-filter-item' onClick={() => setSort('Latest')}>Latest</div>
                <div className='oc-filter-item' onClick={() => setSort('Oldest')}>Oldest</div>
                <div className='oc-filter-item' onClick={() => setSort('Store Name')}>Store Name</div>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );
    }
    function setCategory(category){
        handleCloseCategory()
        setFilterCategory(category)
    }
    function setSort(sort){
        handleCloseSort()
        setFilterSort(sort)
    }

    return (
        <>
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

            <Container className='mt-3 mb-3'>
                <Row className='list-dropdown-row'>
                    <Col className='p-0'>
                        <Button variant="outline-secondary" onClick={handleShowCategory} className="w-100 list-dropdown-btn">
                            Category
                            <div className='small'>{filterCategory}</div>
                        </Button>
                    </Col>
                    <Col className='p-0'>
                        <Button variant="outline-secondary" onClick={handleShowSort} className="w-100 list-dropdown-btn">
                            Sort By
                            <div className='small'>{filterSort}</div>
                        </Button>
                    </Col>
                </Row>
            </Container>

            <Container>
            <Row>
            {
            voucherData.map((item,index) =>
            (
                
                item['items'].map((placeDetail,index2) =>
                    (
                    <Col key="{index2}" xs={6} lg={3} className='mb-3 px-1'>
                    <Link to={'/detail'} state={{ id: placeDetail["id"], category: item['category'] }}>
                        <Card className="categoryCard">
                        <Card.Img variant="top" src={placeDetail["image"]} />
                        <Card.Body>
                            <Card.Title>${placeDetail['amount']} eVoucher</Card.Title>
                            <Card.Text>
                            <div className='place-name-group'>
                                <div className='bold'>{placeDetail['name']}</div>
                                <div>{placeDetail['location']}</div>
                            </div>
                            <div className="points">{placeDetail['points']} pts</div>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Link>
                    </Col>
                    )
                )
                
            )
            )}
            </Row>
            </Container>
            
        </div> {/* end appBody */}

        <OffCanvasCategory placement='bottom' />
        <OffCanvasSort placement='bottom' />
        </>
    )
}
export default Rewards