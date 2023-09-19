import './header.styles.css';
import logo from '../assets/logo.png';
import {FaInstagram, FaTiktok, FaFacebook, FaFacebookF, FaFacebookSquare} from 'react-icons/fa';

const Header = () => (
    <div className='header-container'>
        <div className="logo-container">
            <img src={logo} alt='logos' />           
        </div>
        <div className='option-container'>
            <div className='optionLink'>
               Henrich
            </div>
            <div className='vertical-bar'></div>
            <div className='optionLink'>
                Mon-Fri, 9:00-19:00
            </div>
            <div className='vertical-bar'></div>
            <div className='optionLink'>
                <FaFacebook className='fa-icon' />
                <FaTiktok className='fa-icon' />
                <FaInstagram className='fa-icon' />
            </div>
        </div>
    </div>
);

export default Header;