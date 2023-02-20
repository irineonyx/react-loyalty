import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser'
import voucherData from '../voucherdata.json';

const Detail = () => {
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
        </div>
        </>
    )
}

export default Detail