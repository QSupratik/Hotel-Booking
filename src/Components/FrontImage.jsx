import HotelImage1 from "../Images/HotelImage1.png";
import HotelImage2 from "../Images/HotelImage2.png";
import HotelImage3 from "../Images/HotelImage3.png";
import HotelImage4 from "../Images/HotelImage4.png";


function FrontImage({HotelImage5}) {
    return (
        <div>
            <table>
                <tr>
                    <td rowspan="2" colspan="2"><img src={HotelImage1}></img></td>
                    <td><img src={HotelImage2}></img></td>
                    <td><img src={HotelImage3}></img></td>
                </tr>
                <tr>
                    <td><img src={HotelImage4}></img></td>
                    <td><img src={HotelImage5}></img></td>
                </tr>
            </table>
        </div>
    )
}

export default FrontImage;