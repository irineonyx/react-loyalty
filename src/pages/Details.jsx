import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
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
        loadDetail(locationState?.id)
      }, [locationState?.id])

    function loadDetail(detailID){
        voucherData.map((item,index) =>
        {
            if(detailID == item['id']){
                console.log(detailID)
                setDetail({
                    id: item['id'],
                    img: item['image'],
                    amount: item['amount'],
                    name: item['name'],
                    points: item['points'],
                    location: item['location'],
                    tnc: item['tnc']
                })
            }
        });
    }

    return (
        <>
        <div className="appBody">
            <img src={detail['img']} alt="deal" className="img-detail" />
            <div>${detail['amount']} eVoucher</div>
            <div>{detail['name']}</div>
            <div>{detail['points']}</div>
            <div>Valid at {detail['location']}</div>

            <div>Terms & Conditions</div>
            {detail['tnc']}
        </div>
        </>
    )
}

export default Detail