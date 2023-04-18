import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import parse from 'html-react-parser'
import voucherData from '../voucherdata.json';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import imgBack from '../images/arrow.png';

const Detail = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location = useLocation();
    const locationState = location.state;

    const [detail, setDetail] = useState({
        id: null,
        img: "",
        amount: 0,
        name: "",
        points: 0,
        location: "",
        tnc: ""
      }
    )

    React.useEffect(() => {
        loadDetail(locationState.id,locationState.category)
      }, [locationState.id])

    function loadDetail(detailID,category){
        voucherData.map((item,index) =>
        {
            if(category == item['category']){
                item['items'].map((placeDetail,index2) => {
                    if(detailID == placeDetail['id']){
                        setDetail({
                            id: placeDetail['id'],
                            img: placeDetail['image'],
                            amount: placeDetail['amount'],
                            name: placeDetail['name'],
                            points: placeDetail['points'],
                            location: placeDetail['location'],
                            tnc: placeDetail['tnc']
                        })
                    }
                })//end looping second array
            }//end if
        })//end looping first array
    }

    function redeem(){
        window.location.href = '/myrewards'
    }

    return (
        <>
        <div>
          <div className='appBody'>
          <div className='py-3'>
              <Link to={'/rewards'}>
                  <div className='back-group'>
                      <img src={imgBack} alt="Back" />
                      Back to rewards
                  </div>
              </Link>
              <h1 className='mt-2'>Redeem</h1>
          </div>

          <div className='float'>
            <img src={detail['img']} alt="deal" className="img-detail" />
            <div className='detail-points-sect'>
              <div className='detail-points-left-col'>
                Points
                <div><span>5</span> points</div>
              </div>
              <div className='detail-points-right-col'>
                Validity
                <div>22 Mar 2023 to 21 Jun 2023</div>
              </div>
            </div>
            <div className='how-to-sect'>
              <div>How to redeem</div>
              <p>Use your points to enjoy a $5 voucher at any Jollibean store</p>

              <div>Terms and conditions</div>
              <p>Lorem ipsum dolor sit amet, consectr adipiscing elit aliquip exea
sed do eiusmod tempor incididunt ut labore et dolore magna
quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo</p>
            </div>
          </div>
          </div>
          

          <div className='redeem-sect'>
            <Button size="lg" className="solid-btn" onClick={handleShow}>Redeem</Button>
            <div>By clicking "Redeem Now", you have 15 minutes to complete the redemption before it expires.</div>
          </div>


      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className='bold'>Get This Reward!</div>
          <div>Redeem with 5 points?</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={redeem} className="solid-btn">
            Yes, Redeem Now
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>
        </>
    )
}

export default Detail