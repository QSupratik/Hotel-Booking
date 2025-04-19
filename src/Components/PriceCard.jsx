import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './PriceCard.module.css';

function PriceCard({ price = 26000 }) {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [guests, setGuests] = useState(1);

    const nights = checkInDate && checkOutDate
        ? Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
        : 0;

    const subtotal = nights * price;
    const serviceFee = Math.round(subtotal * 0.141); // example 14.1% fee
    const total = subtotal + serviceFee;

    return (
        <div className={styles.mainCard}>
            <h3 className={styles.priceLabel}>
                ₹{price.toLocaleString()} <span className={styles.perNight}>night</span>
            </h3>

            <div className={styles.dateRow}>
                <div className={styles.dateField}>
                    <label>CHECK-IN</label>
                    <DatePicker
                        selected={checkInDate}
                        onChange={(date) => {
                            setCheckInDate(date);
                            if (checkOutDate && date > checkOutDate) setCheckOutDate(null);
                        }}
                        selectsStart
                        startDate={checkInDate}
                        endDate={checkOutDate}
                        placeholderText="Add date"
                        minDate={new Date()}
                        dateFormat="MM/dd/yyyy"
                    />
                </div>

                <div className={styles.dateField}>
                    <label>CHECKOUT</label>
                    <DatePicker
                        selected={checkOutDate}
                        onChange={(date) => setCheckOutDate(date)}
                        selectsEnd
                        startDate={checkInDate}
                        endDate={checkOutDate}
                        placeholderText="Add date"
                        minDate={checkInDate || new Date()}
                        dateFormat="MM/dd/yyyy"
                    />
                </div>
            </div>

            <div className={styles.guestField}>
                    <label>GUESTS</label>
                    <select value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
                        {[...Array(10)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1} guest{i > 0 ? 's' : ''}</option>
                        ))}
                    </select>
                </div>

            <button className={styles.reserveButton}>Reserve</button>

            <p align="center" className={styles.disclaimer}>You won't be charged yet</p>

            <div className={styles.priceBreakdown}>
                <div>
                    ₹{price.toLocaleString()} x {nights} nights
                </div>
                <div>₹{subtotal.toLocaleString()}</div>
            </div>

            <div className={styles.priceBreakdown}>
                <div>
                    <a href="#">Airbnb service fee</a>
                </div>
                <div>₹{serviceFee.toLocaleString()}</div>
            </div>

            <hr />

            <div className={styles.totalSection}>
                <div><strong>Total before taxes</strong></div>
                <div><strong>₹{total.toLocaleString()}</strong></div>
            </div>
        </div>
    );
}

export default PriceCard;