import { useState } from "react";

const UserRating = ({ name, rating, location, comment, className }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < count ? "text-warning" : "text-muted"}>
          ★
        </span>
      );
    }
    return stars;
  };

  const shortComment = comment.length > 100 ? comment.slice(0, 100) + "..." : comment;

  return (
    <div className={`card mb-4 shadow-sm ${className}`}>
      <div className="card-body">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            <h6 className="mb-0 fw-semibold">{name}</h6>
            <small className="text-muted">{location}</small>
          </div>
          <div className="fs-5">{renderStars(rating)}</div>
        </div>

        {/* Comment */}
        <p className="card-text">
          {expanded ? comment : shortComment}
          {comment.length > 100 && (
            <button
              className="btn btn-link btn-sm ps-1"
              style={{ textDecoration: "underline" }}
              onClick={toggleExpanded}
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default UserRating;
