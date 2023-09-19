import './App.css';
import './header/header.component';
import Header from './header/header.component';
import Navigation from './navigation/navigation.component';
import Banner from './banner/banner.component';
import BookAppointment from './bookappointment/bookappointment';

function App() {
  return (
    <div className="App">
      <div className='header-component'>
        <Header />
        <Navigation />
        <Banner />
      </div>
      <BookAppointment />
    </div>
  );
}

export default App;
