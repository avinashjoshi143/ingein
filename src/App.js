import './App.css';
import './header/header.component';
import Header from './header/header.component';
import Navigation from './navigation/navigation.component';
import Banner from './banner/banner.component';
import BookAppointment from './bookappointment/bookappointment';
import Services from './services/services.component';
import Works from './works/work.component';
import ContactUs from './contact-us/contact-us.component';

function App() {
  return (
    <div className="App">
      <div className='header-component'>
        <Header />
        <Navigation />
        <Banner />
      </div>
      <BookAppointment />
      <Services />
      <Works />
      <ContactUs />
    </div>
  );
}

export default App;
