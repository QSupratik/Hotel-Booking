import UserRating from "./UserRating.jsx";
import styles from "./UserRatingSection.module.css"

const UserRatingsSection = () => {
  const reviews = [
    {
      name: "Amandeep Singh",
      rating: 5,
      location: "New York, USA",
      comment:
        "Absolutely stunning place! The host was so helpful and responsive. Loved the cozy interiors and the location was perfect for our weekend getaway. Would definitely book again!",
    },
    {
      name: "Sandeep",
      rating: 4,
      location: "Madrid, Spain",
      comment:
        "Good stay overall. The kitchen could be better stocked but the place is clean and comfy. Quiet neighborhood too.",
    },
    {
      name: "Manvinder Chauhan",
      rating: 2,
      location: "Agra, Uttar Pradesh",
      comment:
        "The Villa was exactly as described. The property was spotless. One of the most beautiful properties in Punjab. Extremely safe, private and a wonderful staff."
    }
  ];

  return (
    <div className="container">
      <h4 className="mb-4">What guests are saying</h4>
      <div className={styles.abcd}>
      {reviews.map((review, idx) => (
        <UserRating key={idx} name={review.name} rating={review.rating} location={review.location} comment={review.comment} className={styles.userRating}/>
      ))}
      </div>
    </div>
  );
};
export default UserRatingsSection;