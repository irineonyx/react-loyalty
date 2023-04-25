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
        loadDetail(locationState.id)
      }, [locationState.id])

    function loadDetail(detailID){
      const requestOptions = {
        headers: { 'X-System-Language': 'en-EN' }
      };
      fetch(`${process.env.REACT_APP_HOST}/api-voucher/v1/voucher/details/${detailID}`, requestOptions)
        .then(async response => {
            const returnedData = await response.json();

          if (returnedData.success) {
            const parsedValidUntil = new Date(returnedData.result.voucher_status.valid_until);
            setDetail({
              id: detailID,
              img: returnedData.result.voucher_details.voucher_image,
              amount: 0,
              name: returnedData.result.name,
              desc: returnedData.result.description,
              points: returnedData.result.voucher_points.point,
              valid_until: parsedValidUntil.toLocaleDateString(),
              location: returnedData.result.description,
              tnc: returnedData.result.voucher_details.tnc
            })
          }
          
        })  

        
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
              <div className='detail-points detail-points-left-col'>
                Points
                <div><span>{detail['points']}</span> points</div>
              </div>
              <div className='detail-points detail-points-right-col'>
                Validity
                <div>{detail['valid_until']}</div>
              </div>
            </div>
            <div className='how-to-sect'>
              <div className='small'>How to redeem</div>
              <p>{detail['description']}</p>

              <div className='small'>Terms and conditions</div>
              <p>{detail['tnc']}</p>
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
          <div>Redeem with {detail['points']} points?</div>
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