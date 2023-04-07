import React, { useState } from 'react';
import { Link } from "react-router-dom";

const RedeemCode = () => {
    const [redeemCode, setRedeemCode] = useState('12345');

    return (
        <>
        <div className='body-float-grey'>
            <div className='body-float-inner'>
                <div className='bold'>Completed!</div>
                <div className='input-code'>12345</div>
                <div className='btn-action-active' onClick={() => {navigator.clipboard.writeText(redeemCode)}}>Copy Code</div>
                <div>Promo code can be applied on FoodPanda app. Expires on 26 Aug 2023</div>
                <div>Balance: <strong>55</strong> points</div>
            </div>
        </div>
        </>
    )
}
export default RedeemCode