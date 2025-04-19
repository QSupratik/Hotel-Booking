import React from "react";

const RatingSection = ({
  overall = 5.0,
  cleanliness = 5.0,
  accuracy = 5.0,
  checkIn = 5.0,
  communication = 5.0,
  location = 5.0,
  value = 5.0,
}) => {
  const ratingCategories = [
    { label: "Cleanliness", icon: "🧼", value: cleanliness },
    { label: "Accuracy", icon: "✔️", value: accuracy },
    { label: "Check-in", icon: "🔑", value: checkIn },
    { label: "Communication", icon: "💬", value: communication },
    { label: "Location", icon: "🗺️", value: location },
    { label: "Value", icon: "🏷️", value: value },
  ];

  return (
    <div className="container text-center py-5">
      {/* Main Rating */}
      <div>
        <h1 style={{ fontSize: "4rem" }}>🥇 {overall.toFixed(1)} 🥇</h1>
        <h5 className="fw-bold mt-2">Guest favourite</h5>
        <p className="text-muted">
          This home is in the <strong>top 1%</strong> of eligible listings based on ratings, reviews and reliability
        </p>
      </div>

      {/* Overall rating chart */}
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

      {/* Categories */}
      <div className="row row-cols-2 row-cols-md-3 g-4 mt-4">
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
