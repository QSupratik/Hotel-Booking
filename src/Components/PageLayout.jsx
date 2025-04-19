import React from 'react';
import PriceCard from './PriceCard.jsx';
import ListingSummary from './ListingSummary.jsx';
import PropertyDescription from './PropertyDescription.jsx';
import styles from './PageLayout.module.css';
import BedroomSlider from './BedroomSlider.jsx';
import Amenities from "./Amenities.jsx";

function PageLayout() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftColumn}>
        <ListingSummary />
        <PropertyDescription/>
        <BedroomSlider></BedroomSlider>
        <Amenities></Amenities>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.stickyCard}>
          <PriceCard price={26000} className={styles.priceCard}/>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
