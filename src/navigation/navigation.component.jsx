import './navigation.styles.css';

import {FaInstagram, FaTiktok, FaFacebook} from 'react-icons/fa';
import Button from '../button/button.component';

const Navigation = () => {
    return(
    <div className='nav-container'>
        <div className="nav-link-container">
            <a className='nav-links' href="" target="_blank">HomePage</a> 
            <a className='nav-links' href="" target="_blank">Services</a>
            <a className='nav-links' href="" target="_blank">Locations</a>
            <a className='nav-links' href="" target="_blank">Contacts</a>          
        </div>
        <div className='nav-option-container'>
            <div className='nav-optionLink'>
                +49 221 57 000 807
            </div>
            <div className='vertical-bar'></div>
            <div className='nav-optionLink'>
                <Button value="Call Back" color='grey' />
                <Button value="Book an Appointment" color="blue" />
            </div>
        </div>
    </div>
);}

export default Navigation;