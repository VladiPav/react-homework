import React from "react";

const StarRating = ({ rating, onRatingChange }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="star-rating">
      {stars.map((star) => (
        <Star
          key={star}
          filled={star <= rating}
          onClick={() => onRatingChange(star)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => {
  const starStyle = {
    color: filled ? "orange" : "grey",
    cursor: "pointer",
  };
  return (
    <span className="star" onClick={onClick} style={starStyle}>
      ★
    </span>
  );
};

export default StarRating;
