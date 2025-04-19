import './App.css'
import Header from './Components/Header/Header.jsx';
import HotelMap from './Components/HotelMap';
import PageLayout from './Components/PageLayout';
import Rating from "./Components/Rating.jsx";
import UserRatingSection from './Components/UserRatingSection.jsx';

function App() {
  return(
    <>

      <Header></Header>
      <hr className="horizontalLine"/>
      <PageLayout></PageLayout>
      <Rating overall={5.0} cleanliness={4.9} accuracy={5.0} checkIn={5.0} communication={4.8} location={5.0} value={4.9}/>
      <UserRatingSection/>
      <HotelMap lat={31.3875} lng={75.5692} />

    </>
  )
}
export default App