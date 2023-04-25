import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Offcanvas from 'react-bootstrap/Offcanvas';
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
    const [voucherData, setVoucherData] = useState([]);

    useEffect(() => {
      const requestOptions = {
        method: 'POST',
        headers: { 'X-System-Language': 'en-EN' },
        body: JSON.stringify({
          "status" : "",
          "merchant_id": "",
          "code" : "",
          "name" : ""
      })
      };
      fetch(`${process.env.REACT_APP_HOST}/api-voucher/v1/voucher/list`, requestOptions)
        .then(async response => {
            const returnedData = await response.json();

          if (returnedData.success) {
              // get error message from body or default to response status
              // const error = (returnedData && returnedData.message) || response.status;
              // return Promise.reject(error);

              setVoucherData(returnedData.result)
          }
          
        })        
    }, [])

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
                <Col>
                  <h1>Rewards</h1>
                </Col>
                <Col>
                  <Link to={'/myrewards'}>
                    <div className='btn-outline-active'>
                      <img src={imgMyRewardsIcon} alt="My Rewards" /> My Rewards
                    </div>
                  </Link>
                </Col>
              </Row>
              <Row>
              <img src={imgRewardsBanner} alt="Masthead" className='masthead rewards-masthead' />
              </Row>
              
            <Row className='mt-3'>
            {
            voucherData.map((item,index) =>
            (
                <Link to={'/detail'} state={{ id: item["id"] }} key={item['id']}>
                    <Card className="categoryCard">
                      <Card.Body>
                          <div className='card-left'>
                            <img src={item["voucher_details"]["voucher_image"]} alt={item['name']}/>
                          </div>
                          
                          <div className='card-right'>
                            {/*}
                              <div><strong>${item['amount']} eVoucher</strong></div>
            */}
                              <div className='text-small'>{item['name']} - {item['description']}</div>
                              <div className='text-small'><span className='points'>{item['voucher_points']['points']}</span> points</div>
                          </div>
                      </Card.Body>
                    </Card>
                </Link>
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