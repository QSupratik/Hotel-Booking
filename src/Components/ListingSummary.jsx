import styles from './ListingSummary.module.css';
import {FaTrophy, FaUsers, FaRegCalendarCheck } from 'react-icons/fa';
import GuestFavourite from "../Images/GuestFavourite.png";
import NoOfStars from './NoOfStars';
import HostImage from "../Images/HostImage.png";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

let rating = 4;

function ListingSummary() {
  return (
    <div className={styles.summaryContainer}>

      <h2 className={styles.title}>Entire villa in Jalandhar, India</h2>
      <p className={styles.subInfo}>16+ guests · 6 bedrooms · 10 beds · 8 bathrooms</p>

      <div className={styles.highlightBox}>
        <img src={GuestFavourite} />
        <div>One of the most loved homes on Airbnb, according to guests</div>
        <div className={styles.rating}>
          {rating} 
          <div >
          <NoOfStars rating={rating} className={styles.ratingStars}/>
          </div>
        </div>
        <div className={styles.reviewLink}>33 Reviews</div>
      </div>

      <div className={styles.hostBox}>
        <img src={HostImage}/>
        <div>
          <div className={styles.hostedBy}>Hosted by Mandeep Singh</div>
          <div className={styles.hostDetails}>Superhost · 2 years hosting</div>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.featureItem}>
        <EmojiEventsIcon className={styles.trophyIcon}/>
        <div>
          <div className={styles.featureTitle}>Top 1% of homes</div>
          <div className={styles.featureDesc}>
            This home is one of the highest ranked based on ratings, reviews and reliability.
          </div>
        </div>
      </div>

      <div className={styles.featureItem}>
        <PeopleIcon className={styles.icon} />
        <div>
          <div className={styles.featureTitle}>Perfect ratings from families</div>
          <div className={styles.featureDesc}>
            100% of families who stayed here in the past year rated it 5 stars overall.
          </div>
        </div>
      </div>

      <div className={styles.featureItem}>
        <EditCalendarIcon className={styles.icon} />
        <div>
          <div className={styles.featureTitle}>Free cancellation for 48 hours</div>
          <div className={styles.featureDesc}>
            Get a full refund if you change your mind.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingSummary;
