import banner from '../assets/banner.png';
import bannercar from '../assets/carbanner.png';
import Button from '../button/button.component';
import './banner.styles.css';
import { FcGoogle } from 'react-icons/fc';

const Banner = () => {
    const bannercarstyle = {
        'width' : '800px',
        'height' : '400px',
        'marginTop' : '8%',
        'marginLeft' : '-10%'
    }
    const buttonstyle = {
        'marginLeft' : '5%'
    }
    const textstyle = {
        'marginLeft' : '2%',
        'color' : 'grey',
        'marginRight' : '2%'
    }
    return(
        <div className='banner-container'>
            <div>
                <img src={banner} />
                <Button style={buttonstyle} value='Book an Appointment' color='blue' />
                <div className='mapbackground'>
                    <p style={textstyle}>Find us on Google map:</p>
                    <FcGoogle style={textstyle} />
                    Google Maps
                </div>
            </div>
            <div>
                <img src={bannercar}  style={bannercarstyle} />
            </div>
        </div>
    );
}

export default Banner;