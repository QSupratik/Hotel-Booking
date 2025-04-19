import UserRating from "./UserRating";

const UserRatingsSection = () => {
  const reviews = [
    {
      name: "Emily R.",
      rating: 5,
      location: "New York, USA",
      comment:
        "Absolutely stunning place! The host was so helpful and responsive. Loved the cozy interiors and the location was perfect for our weekend getaway. Would definitely book again!",
    },
    {
      name: "Carlos M.",
      rating: 4,
      location: "Madrid, Spain",
      comment:
        "Good stay overall. The kitchen could be better stocked but the place is clean and comfy. Quiet neighborhood too.",
    },
  ];

  return (
    <div className="container">
      <h4 className="mb-4">What guests are saying</h4>
      {reviews.map((review, idx) => (
        <UserRating key={idx} {...review} />
      ))}
    </div>
  );
};

export default UserRatingsSection;
