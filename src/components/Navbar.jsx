import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faGift,faHamburger,faTags,faWallet } from '@fortawesome/free-solid-svg-icons'

const AppNavbar = () => {
    const location = useLocation();
    const [navbarTitle, setNavbarTitle] = useState('Home')

    React.useEffect(()=>
    { 
        if(location.pathname == '/'){
            setNavbarTitle('Home')
        }
        else if(location.pathname == '/rewards'){
            setNavbarTitle('Rewards')
        }
        else if(location.pathname == '/detail'){
            setNavbarTitle('Rewards')
        }
    },[location])

    return (
        <footer>
            <Stack className="footerNav" direction="horizontal">
                <div className={"footerElem " + (navbarTitle == 'eWallet'? 'active' : '')}>
                    <div><FontAwesomeIcon icon={faWallet} /></div>
                    <div>e-wallet</div>
                </div>
                <Link to={'/rewards'}>
                <div className={"footerElem " + (navbarTitle == 'Rewards'? 'active' : '')}>
                    <div><FontAwesomeIcon icon={faGift} /></div>
                    <div>Rewards</div>
                </div>
                </Link>
                <Link to={'/'}>
                <div className={"footerElem " + (navbarTitle == 'Home'? 'active' : '')}>
                    <div><FontAwesomeIcon icon={faHome} /></div>
                    <div>Home</div>
                </div>
                </Link>
                <div className={"footerElem " + (navbarTitle == 'eStore'? 'active' : '')}>
                    <div><FontAwesomeIcon icon={faTags} /></div>
                    <div>eStore</div>
                </div>
                <div className={"footerElem " + (navbarTitle == 'MakanMaster'? 'active' : '')}>
                    <div><FontAwesomeIcon icon={faHamburger} /></div>
                    <div>Makan Master</div>
                </div>
            </Stack>
        </footer>
    )
  }
  
  export default AppNavbar