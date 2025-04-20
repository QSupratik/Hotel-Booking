import { useState } from "react";
import PetsIcon from '@mui/icons-material/Pets';
import ParkIcon from '@mui/icons-material/Park';
import BlenderIcon from '@mui/icons-material/Blender';
import WifiIcon from '@mui/icons-material/Wifi';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import PoolIcon from '@mui/icons-material/Pool';
import TvIcon from '@mui/icons-material/Tv';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';

const amenities = [
  { name: "Park view", icon: <ParkIcon/>, available: true },
  { name: "Garden view", icon: <ParkIcon/>, available: true },
  { name: "Kitchen", icon: <BlenderIcon/>, available: true },
  { name: "Fast wifi – 115 Mbps", icon: <WifiIcon/>, available: true },
  { name: "Free driveway parking on premises – 20 spaces", icon: <TimeToLeaveIcon/>, available: true },
  { name: "Private outdoor pool – available all year, open specific hours", icon: <PoolIcon/>, available: true },
  { name: "Pets allowed", icon: <PetsIcon/>, available: true },
  { name: "65-inch HDTV with Amazon Prime Video", icon: <TvIcon/>, available: true },
  { name: "Carbon monoxide alarm", icon: <NotificationImportantIcon/>, available: false },
  { name: "Smoke alarm", icon: <SmokeFreeIcon/>, available: false },
];

const INITIAL_VISIBLE = 8; // Number of amenities to show initially

const AmenitiesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleAmenities = showAll ? amenities : amenities.slice(0, INITIAL_VISIBLE);

  // Split visible amenities into two roughly equal columns
  const halfway = Math.ceil(visibleAmenities.length / 2);
  const col1 = visibleAmenities.slice(0, halfway);
  const col2 = visibleAmenities.slice(halfway);

  return (
    <div className="container py-4 border-top">
      <h5 className="fw-semibold mb-4">What this place offers</h5>

      <div className="row">
        <div className="col-md-6">
          {col1.map((item, index) => (
            <div key={index} className="mb-2 d-flex align-items-start">
              <span className="me-2" style={{ fontSize: "1.2rem" }}>{item.icon}</span>
              <span className={!item.available ? "text-muted text-decoration-line-through" : ""}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          {col2.map((item, index) => (
            <div key={index} className="mb-2 d-flex align-items-start">
              <span className="me-2" style={{ fontSize: "1.2rem" }}>{item.icon}</span>
              <span className={!item.available ? "text-muted text-decoration-line-through" : ""}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      {amenities.length > INITIAL_VISIBLE && (
        <div className="mt-4">
          <button className="btn btn-outline-dark" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show less" : `Show all ${amenities.length} amenities`}
          </button>
        </div>
      )}
    </div>
  );
};

export default AmenitiesSection;
