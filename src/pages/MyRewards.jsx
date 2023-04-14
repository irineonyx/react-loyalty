import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import imgSample from '../images/myreward-store.png';
import imgBack from '../images/arrow.png';

const MyRewards = () => {
    return (
        <>
        <div className='myrewards'>
            <div className='p-3'>
                <Link to={'/rewards'}>
                    <div className='back-group'>
                        <img src={imgBack} alt="Back" />
                        Back to rewards
                    </div>
                </Link>
                <h1>My Rewards</h1>
            </div>
            
            <Tabs
            defaultActiveKey="active"
            id="uncontrolled-tab-example"
            className="mb-3"
            fill
            >
                <Tab eventKey="active" title="Active Rewards">
                    <div className='tab-inner'>
                        <div className='myr-item'>
                            <div className='myr-item-left'><img src={imgSample} alt='Store'/></div>
                            <div className='myr-item-right'>
                                <div className='myr-amount'>$5 voucher</div>
                                <div className='myr-store'>Jollibean</div>
                                <div className='myr-action'>
                                    <div className='myr-date'>Expiry 21 Jun 2023</div>
                                    <Link to={'/myrewards/redeem/code'}>
                                        <div className='myr-use'>Use Now</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='myr-item'>
                            <div className='myr-item-left'><img src={imgSample} alt='Store'/></div>
                            <div className='myr-item-right'>
                                <div className='myr-amount'>$5 voucher</div>
                                <div className='myr-store'>Jollibean</div>
                                <div className='myr-action'>
                                    <div className='myr-date'>Expiry 21 Jun 2023</div>
                                    <Link to={'/myrewards/redeem/qr'}>
                                        <div className='myr-use'>Use Now</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="past" title="Past Rewards">
                    <div className='tab-inner'>
                        <div className='myr-item inactive'>
                            <div className='myr-item-left'><img src={imgSample} alt='Store'/></div>
                            <div className='myr-item-right'>
                                <div className='myr-amount'>$5 voucher</div>
                                <div className='myr-store'>Jollibean</div>
                                <div className='myr-action'>
                                    <div className='myr-date'>Expiry 21 Jun 2023</div>
                                    <div className='myr-use'>Expired</div>
                                </div>
                            </div>
                        </div>
                        <div className='myr-item inactive'>
                            <div className='myr-item-left'><img src={imgSample} alt='Store'/></div>
                            <div className='myr-item-right'>
                                <div className='myr-amount'>$5 voucher</div>
                                <div className='myr-store'>Jollibean</div>
                                <div className='myr-action'>
                                    <div className='myr-date'>Expiry 21 Jun 2023</div>
                                    <div className='myr-use'>Used</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>

            
        </div> {/* end appBody */}
        </>
    )
}
export default MyRewards