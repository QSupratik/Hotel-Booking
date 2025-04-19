

const amenities = [
  { name: "Park view", icon: "🌳", available: true },
  { name: "Garden view", icon: "🌼", available: true },
  { name: "Kitchen", icon: "🍽️", available: true },
  { name: "Fast wifi – 115 Mbps", icon: "📶", available: true },
  { name: "Free driveway parking on premises – 20 spaces", icon: "🚗", available: true },
  { name: "Private outdoor pool – available all year, open specific hours", icon: "🏊", available: true },
  { name: "Pets allowed", icon: "🐶", available: true },
  { name: "65-inch HDTV with Amazon Prime Video", icon: "📺", available: true },
  { name: "Carbon monoxide alarm", icon: "🚫", available: false },
  { name: "Smoke alarm", icon: "🚭", available: false },
];

const AmenitiesSection = () => {
  // Split the list into two columns
  const halfway = Math.ceil(amenities.length / 2);
  const col1 = amenities.slice(0, halfway);
  const col2 = amenities.slice(halfway);

  return (
    <div className="container py-4 border-top">
      <h5 className="fw-semibold mb-4">What this place offers</h5>
      <div className="row">
        <div className="col-md-6">
          {col1.map((item, index) => (
            <div key={index} className="mb-2 d-flex align-items-start">
              <span className="me-2" style={{ fontSize: "1.2rem" }}>
                {item.icon}
              </span>
              <span className={!item.available ? "text-muted text-decoration-line-through" : ""}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          {col2.map((item, index) => (
            <div key={index} className="mb-2 d-flex align-items-start">
              <span className="me-2" style={{ fontSize: "1.2rem" }}>
                {item.icon}
              </span>
              <span className={!item.available ? "text-muted text-decoration-line-through" : ""}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-4">
        <button className="btn btn-outline-dark">Show all 68 amenities</button>
      </div>
    </div>
  );
};

export default AmenitiesSection;
