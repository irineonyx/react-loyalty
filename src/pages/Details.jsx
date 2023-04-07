import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser'
import voucherData from '../voucherdata.json';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
        <div className="appBody">
            <img src={detail['img']} alt="deal" className="img-detail" />
            <div className='text-center mt-1'>
                <div className='bold'>${detail['amount']} eVoucher</div>
                <div className='bold'>{detail['name']}</div>
                <div className="points">{detail['points']} points</div>
            </div>
           
            <div className='mt-3'>Valid at {detail['location']}</div>

            <div className='bold mt-3'>Terms & Conditions</div>
            {parse(detail['tnc'])}

            <div>
                <Button variant="primary" size="lg" className="solid-btn" onClick={handleShow}>Redeem</Button>
            </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Redeem now?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={redeem}>
            Yes, Redeem Now
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        </>
    )
}

export default Detail