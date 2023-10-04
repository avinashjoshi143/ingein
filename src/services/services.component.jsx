import './services.styles.css';
import first from '../assets/first-service.png';
import second from '../assets/second-service.png';
import third from '../assets/third-service.png';
import fourth from '../assets/fourth-service.png';
import Button from '../button/button.component';
import iconImage from '../assets/carcompany.png';

const Services = () => {
    return(
        <div className='services-container'>
            <div className='centered-text'>
                <h1>Our Services</h1>
            </div>
            <div className='service-row'>
                <div className='service-component'>
                    <img className='service-img' src={first} />
                    <div className='service-content'>
                        <h3>Change Acceptance</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati nobis distinctio libero, eveniet totam dicta possimus, neque sequi voluptatum officia quam id vitae dolorem eum ullam tempore velit ea?</p>
                        <Button value="Learn More" color="blue" />
                    </div>
                </div>
                <div className='service-component'>
                    <img className='service-img' src={second} />
                    <div className='service-content'>
                        <h3>Inspection</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eligendi, suscipit itaque dolorem facere enim. Numquam illo, est, earum delectus at corporis itaque corrupti eaque assumenda, eligendi eveniet vel consequatur.</p>
                        <Button value="Learn More" color="blue" />
                    </div>
                </div>
            </div>
            <div className='service-row'>
                <div className='service-component'>
                    <img className='service-img' src={third} />
                    <div className='service-content'>
                        <h3>Accident and valuation reports</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nihil aut qui eius neque officiis hic, in rem, ea odit praesentium necessitatibus quod non laboriosam, quaerat adipisci tempora inventore aperiam?</p>
                        <Button value="Learn More" color="blue" />
                    </div>
                </div>
                <div className='service-component'>
                    <img className='service-img' src={fourth} />
                    <div className='service-content'>
                        <h3>Classic car-report</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum totam, minus eos officiis libero consequuntur delectus harum sunt odit ad ipsam neque dolore, facere autem quo fugiat porro eaque accusantium.</p>
                        <Button value="Learn More" color="blue" />
                    </div>
                </div>
            </div>
            <>
                <a className='service-link' href='https://google.co.in'> Go to the service page &#8594; </a>
            </>
            <img className='comapany-logo' src={iconImage} alt='carCompanies' />
        </div>
    );
}

export default Services;