import Button from '../button/button.component';
import './bookappointment.styles.css';
import { FaMap, FaCalendar, FaServicestack} from 'react-icons/fa'
const BookAppointment = () => {
    const iconstyle = {
        'margin' : '3%',
        'color' : 'grey'
    }
    return(
        <div className="appointment-container">
            <FaMap  style={iconstyle}/>
            <div className='col-apointment'><FaMap /><h3>Location</h3><p><a href=''>cologne</a></p></div>
            <FaCalendar style={iconstyle} />
            <div className='col-apointment'><h3>Date</h3><p><a href=''>12/12/2023</a></p></div>
            <FaServicestack style={iconstyle} />
            <div className='col-apointment'><h3>Select a Service</h3><p><a href=''>Emissions</a></p></div>
            <div className='single-row col-appointment'><Button value='Book an Appointment' color='blue' /></div>
        </div>
    );
}

export default BookAppointment;