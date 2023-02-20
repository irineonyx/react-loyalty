import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Slider from "react-slick";
import voucherData from '../voucherdata.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [show, setShow] = useState(false);
    const [defaultMenu, setDefaultMenu] = useState('home');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <>
        <div className="appBody">
            <Card className="cardPoint">
            <Card.Body>
                <Card.Title>
                <Stack direction="horizontal">
                    <div>Points Balance</div>
                    <div className="ms-auto">0</div>
                </Stack>
                </Card.Title>
            </Card.Body>
            </Card>

            {
            voucherData.map((item,index) =>
            (
                <div className="voucherGroup" key="{index}">
                <div className="categoryWrapper">
                    <h2 className="categoryName">{item['category']}</h2>
                    <div className='categoryViewAll'>View all <FontAwesomeIcon icon={faAngleRight} /></div>
                </div>
                
                <Slider {...sliderSettings}>
                {
                item['items'].map((placeDetail,index2) =>
                    (
                    <div key="{index2}">
                    <Link to={'/detail'} state={{ id: placeDetail["id"], category: item['category'] }}>
                        <Card className="categoryCard">
                        <Card.Img variant="top" src={placeDetail["image"]} />
                        <Card.Body>
                            <Card.Title>${placeDetail['amount']} eVoucher</Card.Title>
                            <Card.Text>
                            <div className='place-name-group'>
                                <div className='bold'>{placeDetail['name']}</div>
                                <div>{placeDetail['location']}</div>
                            </div>
                            <div className="points">{placeDetail['points']} pts</div>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Link>
                    </div>
                    )
                )
                }
                </Slider>
                </div>
            )
            )}
            
            
        </div> {/* end appBody */}
        </>
    )
}
export default Home