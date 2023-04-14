import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const RedeemQR = () => {
    const [redeemCode, setRedeemCode] = useState('12345');

    return (
        <>
        <div className='body-float-grey'>
            <div className='body-float-inner'>
                <div className='bold'>QR code for merchant to scan</div>
                <div className='qr-code-wrapper'>
                    <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value="123342432423"
                    viewBox={`0 0 256 256`}
                    />
                </div>
                <div className='qr-warning-text'>
                    <div>The voucher needs to be redeemed within 15 minutes.</div>
                    <Link to={'/myrewards'}>
                        <div className='btn-outline-active'>Cancel</div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default RedeemQR