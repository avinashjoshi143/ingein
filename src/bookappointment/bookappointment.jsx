import Button from '../button/button.component';
import './bookappointment.styles.css';
const BookAppointment = () => {
    return(
        <div className="appointment-container">
            <div className='col-apointment'><h3>Location</h3><p><a href=''>cologne</a></p></div>
            <div className='col-apointment'><h3>Date</h3><p><a href=''>12/12/2023</a></p></div>
            <div className='col-apointment'><h3>Select a Service</h3><p><a href=''>Emissions</a></p></div>
            <div className='single-row col-appointment'><Button value='Book an Appointment' color='blue' /></div>
        </div>
    );
}

export default BookAppointment;