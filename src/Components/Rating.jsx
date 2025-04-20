import SanitizerIcon from '@mui/icons-material/Sanitizer';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import KeyIcon from '@mui/icons-material/Key';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MapIcon from '@mui/icons-material/Map';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import OliveLeft from "../Images/OliveLeft.png";
import OliveRight from "../Images/OliveRight.png";

import styles from "./Rating.module.css";

const RatingSection = ({ overall = 5.0, cleanliness = 5.0, accuracy = 5.0, checkIn = 5.0,
  communication = 5.0, location = 5.0, value = 5.0,
}) => {
  const ratingCategories = [
    { label: "Cleanliness", icon: <SanitizerIcon />, value: cleanliness },
    { label: "Accuracy", icon: <TaskAltIcon />, value: accuracy },
    { label: "Check-in", icon: <KeyIcon />, value: checkIn },
    { label: "Communication", icon: <ChatBubbleOutlineIcon />, value: communication },
    { label: "Location", icon: <MapIcon />, value: location },
    { label: "Value", icon: <LocalOfferIcon />, value: value },
  ];

  return (
    <div className="container text-center py-5">
      {/* Main Rating */}
      <div>
        <h1 style={{ fontSize: "4rem" }}>
          <img src={OliveLeft}></img> {overall.toFixed(1)}
          <img src={OliveRight}></img>
        </h1>
        <h5 className="fw-bold mt-2">Guest favourite</h5>
        <p className="text-muted">
          This home is in the <strong>top 1%</strong> of eligible listings based on ratings, reviews and reliability
        </p>
      </div>

      {/* Rating Bars and Categories */}
      <div className={styles.mainRatingSection}>
        <div className="text-start mt-5 mb-3">
          <strong>Overall rating</strong>
          {[5, 4, 3, 2, 1].map((level) => (
            <div key={level} className="d-flex align-items-center">
              <div style={{ width: "1rem" }}>{level}</div>
              <div className="progress flex-grow-1 mx-2" style={{ height: "4px", backgroundColor: "#e0e0e0" }}>
                <div
                  className="progress-bar bg-dark"
                  style={{
                    width: overall >= level ? "100%" : "0%",
                    height: "100%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {ratingCategories.map((cat, idx) => (
          <div key={idx} className="col">
            <div className="border-end pe-3 text-center">
              <h5>{cat.value.toFixed(1)}</h5>
              <div style={{ fontSize: "1.5rem" }}>{cat.icon}</div>
              <div className="text-muted">{cat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSection;