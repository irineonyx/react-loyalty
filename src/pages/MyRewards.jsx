import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import imgSample from '../images/myreward-store.png';
import imgBack from '../images/arrow.png';

const MyRewards = () => {
    const [activeVouchers, setActiveVouchers] = useState([]);
    const [pastVouchers, setPastVouchers] = useState([]);

    useEffect(() => {
        const requestOptions = {
          method: 'POST',
          headers: { 'X-System-Language': 'en-EN' },
          body: JSON.stringify({
            "status" : "",
            "valid_from" : "",
            "valid_to" : "",
            "username" : "non"
        })
        };
        fetch(`${process.env.REACT_APP_HOST}/api-redeem/v1/redeem/list`, requestOptions)
          .then(async response => {
              const returnedData = await response.json();
  
            if (returnedData.success) {
                returnedData.result.map(function(item,index){
                    if(item.redemption_status.status == 'EXPIRED'){
                        setPastVouchers(item)
                    }
                    else{
                        setActiveVouchers(item)
                    }
                })
            }
            
          })        
      }, [])

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
                        {
                        activeVouchers.map((item,index) => (
                            <div className='myr-item'>
                                <div className='myr-item-left'><img src={item.vouchers.voucher_details.voucher_image} alt='Store'/></div>
                                <div className='myr-item-right'>
                                    <div className='myr-amount'>$0 voucher</div>
                                    <div className='myr-store'>-</div>
                                    <div className='myr-action'>
                                        <div className='myr-date'>Expiry {item.vouchers.voucher_status.valid_until}</div>
                                        <Link to={'/myrewards/redeem/code'}>
                                            <div className='myr-use'>Use Now</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </Tab>
                <Tab eventKey="past" title="Past Rewards">
                    <div className='tab-inner'>
                    {
                        pastVouchers.map((item,index) => (
                            <div className='myr-item inactive'>
                                <div className='myr-item-left'><img src={item.vouchers.voucher_details.voucher_image} alt='Store'/></div>
                                <div className='myr-item-right'>
                                    <div className='myr-amount'>$0 voucher</div>
                                    <div className='myr-store'>-</div>
                                    <div className='myr-action'>
                                        <div className='myr-date'>Expiry {item.vouchers.voucher_status.valid_until}</div>
                                        <Link to={'/myrewards/redeem/code'}>
                                            <div className='myr-use'>Use Now</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </Tab>
            </Tabs>

            
        </div> {/* end appBody */}
        </>
    )
}
export default MyRewards