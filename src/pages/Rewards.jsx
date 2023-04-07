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
import imgBack from '../images/arrow.png';
import imgRewardsBanner from '../images/mastheads.png';
import imgMyRewardsIcon from '../images/icon-rewards.png';

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
        <div className="appBody mt-3">
            <div className='top-action-wrapper'>
              <Link to={'/'}>
                  <div className='back-group'>
                      <img src={imgBack} alt="Back" />
                      Back to home
                  </div>
              </Link>
              <Link to={'/myrewards'}>
                <div className='btn-outline-active'>
                  <img src={imgMyRewardsIcon} alt="My Rewards" /> My Rewards
                </div>
              </Link>
              
            </div>

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
                <h1>Rewards</h1>
                <img src={imgRewardsBanner} alt="Masthead" className='masthead rewards-masthead' />
              </Row>
              
            <Row className='mt-3'>
            {
            voucherData.map((item,index) =>
            (
                
                item['items'].map((placeDetail,index2) =>
                    (
                    <Link to={'/detail'} state={{ id: placeDetail["id"], category: item['category'] }}>
                        <Card className="categoryCard">
                          <Card.Body>
                              <div className='card-left'>
                                <img src={placeDetail["image"]} alt={placeDetail['name']}/>
                              </div>
                              
                              <div className='card-right'>
                                  <div><strong>${placeDetail['amount']} eVoucher</strong></div>
                                  <div className='text-small'>{placeDetail['name']} - {placeDetail['location']}</div>
                                  <div className='text-small'><span className='points'>{placeDetail['points']}</span> points</div>
                              </div>
                          </Card.Body>
                        </Card>
                    </Link>
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