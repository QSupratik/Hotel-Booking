import './App.css'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header.jsx';
import HotelMap from './Components/HotelMap';
import PageLayout from './Components/PageLayout';
import Rating from "./Components/Rating.jsx";
import UserRatingSection from './Components/UserRatingSection.jsx';
import FrontImage from './Components/FrontImage';
import HotelImage5 from "./Images/HotelImage5.png";

function App() {
  return(
    <div className="mainAppDiv">
   
      <Header></Header>

      <hr className="horizontalLine"/>
      
      <FrontImage HotelImage5={HotelImage5}></FrontImage>
      <PageLayout></PageLayout>
      <Rating overall={5.0} cleanliness={4.9} accuracy={5.0} checkIn={5.0} communication={4.8} location={5.0} value={4.9}/>
      <UserRatingSection/>
      <HotelMap lat={31.3875} lng={75.5692} />
      <Footer></Footer>

    </div>
  )
}
export default App