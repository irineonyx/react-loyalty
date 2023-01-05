//import { Link } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faGift,faHamburger,faTags,faWallet } from '@fortawesome/free-solid-svg-icons'

const AppNavbar = () => {
    return (
        <footer>
            <Stack className="footerNav" direction="horizontal">
                <div className="footerElem">
                    <div><FontAwesomeIcon icon={faWallet} /></div>
                    <div>e-wallet</div>
                </div>
                <div className="footerElem">
                    <div><FontAwesomeIcon icon={faGift} /></div>
                    <div>Rewards</div>
                </div>
                <div className="footerElem">
                    <div><FontAwesomeIcon icon={faHome} /></div>
                    <div>Home</div>
                </div>
                <div className="footerElem">
                    <div><FontAwesomeIcon icon={faTags} /></div>
                    <div>eStore</div>
                </div>
                <div className="footerElem">
                    <div><FontAwesomeIcon icon={faHamburger} /></div>
                    <div>Makan Master</div>
                </div>
            </Stack>
        </footer>
    )
  }
  
  export default AppNavbar