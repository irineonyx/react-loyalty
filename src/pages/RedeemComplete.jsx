import React, { useState } from 'react';
import { Link } from "react-router-dom";

const RedeemComplete = () => {
    return (
        <>
        <div className='body-float-grey page-complete'>
            <div className='body-float-inner'>
                <div className='bold'>Completed!</div>
                <div>You have redeemed<br></br>$5.00 voucher</div>
                <div>Tampines Mall - Jollibean<br></br>24 Mar 2023 02:36 pm<br></br>ID: 1009345938</div>
                <div>Balance: <strong>55</strong> points</div>
            </div>
            <Link to={'/rewards'}>
                <div className='btn-action-active back-home'>Back To Home</div>
            </Link>
            
        </div>
        </>
    )
}
export default RedeemComplete