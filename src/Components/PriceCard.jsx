import { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import axios from 'axios';

const BookingCard = () => {
  const [activeAccordion, setActiveAccordion] = useState(null); //To choose which among date and guest is chosen
  const [initialState, setInitialState] = useState(true); //If date chosen for first time
  const [checkInDate, setCheckInDate] = useState(null); 
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date()); //Set to current date and time
  const [selectingCheckIn, setSelectingCheckIn] = useState(true);//If checkIn is selected or checkOut is selected
  const [guests, setGuests] = useState({ adults: 4, children: 2, infants: 0, pets: 0 });
  const [latestBooking, setLatestBooking] = useState(null);
  const [error, setError] = useState(null);

  const NIGHTLY_RATE = 26000;
  const SERVICE_FEE = 11012;

  const totalGuests = guests.adults + guests.children;
  const nights = checkInDate && checkOutDate
      ? Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
      : 0;
  const subtotal = nights * NIGHTLY_RATE;
  const total = subtotal + SERVICE_FEE;

  //Date in proper DD/MM/YY format
  const formatDate = (date) => {
    if (!date) return 'Add date';
    return date.toLocaleDateString('en-GB');
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction, 1)
    );
  };

  const handleDateClick = (date) => {
    if (!date) return;

    if (selectingCheckIn) {
      setCheckInDate(date);
      setCheckOutDate(null);
      setSelectingCheckIn(false);
      setInitialState(false);
    } 
    else {
      if (date > checkInDate) {
        setCheckOutDate(date);
        setActiveAccordion(null);
      }
    }
  };

  const toggleDates = () => {
    if (activeAccordion === 'dates') {
      setActiveAccordion(null);
    } else {
      setActiveAccordion('dates');
      setSelectingCheckIn(true);
    }
  };

  const toggleGuests = () => {
    setActiveAccordion(activeAccordion === 'guests' ? null : 'guests');
  };

  const renderCalendar = () => {
    const month = currentMonth.getMonth();
    const year = currentMonth.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
  
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
  
    // Split days into weeks (arrays of 7 items) - otherwise improper aligning
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
  
    return (
      <div className="mt-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <button onClick={() => navigateMonth(-1)} className="btn btn-sm btn-light">
            <FiArrowLeft />
          </button>
          <h5 className="mb-0">
            {currentMonth.toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </h5>
          <button onClick={() => navigateMonth(1)} className="btn btn-sm btn-light">
            <FiArrowRight />
          </button>
        </div>
  
        <div className="row text-center small fw-bold border-bottom pb-1">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div key={day} className="col">
              {day}
            </div>
          ))}
        </div>
  
        {weeks.map((week, weekIdx) => (
          <div className="row text-center" key={weekIdx}>
            {week.map((date, i) => {
              const isSelected =
                date &&
                ((selectingCheckIn &&
                  checkInDate &&
                  date.getTime() === checkInDate.getTime()) ||
                  (!selectingCheckIn &&
                    checkOutDate &&
                    date.getTime() === checkOutDate.getTime()));
              const isInRange =
                date && 
                checkInDate &&
                checkOutDate &&
                date > checkInDate &&
                date < checkOutDate;
              const isDisabled =
                date &&
                (date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                  (!selectingCheckIn && checkInDate && date <= checkInDate));
  
              return (
                <div key={i} className="col p-1">
                  <button
                    disabled={isDisabled || !date}
                    className={`btn btn-sm w-100 ${!date ? 'invisible' : ''}
                      ${isSelected ? 'btn-dark text-white' : ''}
                      ${isInRange ? 'bg-dark' : ''}
                      ${isDisabled ? 'text-muted' : 'btn-outline-light'}`}
                    onClick={() => handleDateClick(date)}
                  >
                    {date?.getDate()}
                  </button>
                </div>
              );
            })}
          </div>
        ))}
  
        {/* Check-in / Check-out buttons */}
        <div className="d-flex justify-content-center gap-3 mt-3">
          <button
            className={`btn btn-sm ${
              selectingCheckIn ? 'btn-dark text-white' : 'btn-outline-secondary'
            }`}
            onClick={() => setSelectingCheckIn(true)}
          >
            Check-in
          </button>
          <button
            className={`btn btn-sm ${
              !selectingCheckIn ? 'btn-dark text-white' : 'btn-outline-secondary'
            }`}
            onClick={() => checkInDate && setSelectingCheckIn(false)}
            disabled={!checkInDate}
          >
            Check-out
          </button>
        </div>
      </div>
    );
  };
  

  const guestsAccordion = (
    <div className="px-2 pb-3">
      {Object.entries(guests).map(([type, count]) => {
        const config = {
          adults: { label: 'Adults', desc: 'Age 13+' },
          children: { label: 'Children', desc: 'Ages 2–12' },
          infants: { label: 'Infants', desc: 'Under 2' },
          pets: { label: 'Pets', desc: 'Service animals only' },
        }[type];

        return (
          <div
            key={type}
            className="d-flex justify-content-between align-items-center my-2"
          >
            <div>
              <strong>{config.label}</strong>
              <br />
              <small className="text-muted">{config.desc}</small>
            </div>
            <div className="btn-group">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setGuests((prev) => ({
                    ...prev,
                    [type]: Math.max(type === 'adults' ? 1 : 0, count - 1),
                  }));
                }}
              >
                −
              </button>
              <span className="px-2 align-self-center">{count}</span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setGuests((prev) => ({
                    ...prev,
                    [type]: count + 1,
                  }));
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  const handleReserve = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', {
        checkInDate,
        checkOutDate,
        guests,
        total,
      });
      console.log('Reservation successful:', response.data);
      alert('Reservation successful!');

      // Store the booking data in local storage
      localStorage.setItem('latestBooking', JSON.stringify(response.data));

      // fetchLatestBooking(); // Fetch the latest booking after successful reservation
    } catch (error) {
      console.error('Error making reservation:', error.response ? error.response.data : error.message);
      setError('Error making reservation. Please try again.');
    }
  };

  // const fetchLatestBooking = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/bookings/latest');
  //     setLatestBooking(response.data);

  //     // Store the booking data in local storage
  //     localStorage.setItem('latestBooking', JSON.stringify(response.data));

  //     setError(null); // Clear any previous errors
  //   } catch (error) {
  //     console.error('Error fetching latest booking:', error.response ? error.response.data : error.message);
  //     setError('Error fetching latest booking. Please try again.');
  //   }
  // };

  const initializeFromLocalStorage = () => {
    const storedBooking = localStorage.getItem('latestBooking');
    if (storedBooking) {
      const bookingData = JSON.parse(storedBooking);
      setCheckInDate(new Date(bookingData.checkInDate));
      setCheckOutDate(new Date(bookingData.checkOutDate));
      setGuests(bookingData.guests);
      setLatestBooking(bookingData);
    }
  };

  useEffect(() => {
    initializeFromLocalStorage();
    // fetchLatestBooking();
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="card shadow-sm p-4">
      <h5 className="fw-bold mb-3">
        ₹{NIGHTLY_RATE} \ night
      </h5>

      {/* Date Picker */}
      <div className="border rounded mb-3">
        <div className="row g-0" onClick={toggleDates}>
          <div className="col-6 border-end p-2">
            <small className="text-muted text-uppercase">Check-in</small>
            <div>{formatDate(checkInDate)}</div>
          </div>
          <div className="col-6 p-2">
            <small className="text-muted text-uppercase">Checkout</small>
            <div>{formatDate(checkOutDate)}</div>
          </div>
        </div>
        {activeAccordion === 'dates' && renderCalendar()}
      </div>

      {/* Guests Picker */}
      <div className="border rounded mb-3" onClick={toggleGuests}>
        <div className="d-flex justify-content-between p-2">
          <div>
            <small className="text-muted text-uppercase">Guests</small>
            <div>{totalGuests} guests</div>
          </div>
          {activeAccordion === 'guests' ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {activeAccordion === 'guests' && guestsAccordion}
      </div>

      {/* Reserve Button & Pricing */}
      <button className="btn btn-danger w-100 fw-bold" onClick={handleReserve}>
        Reserve
      </button>
      <p className="text-center text-muted small mt-2 mb-3">
        You won't be charged yet
      </p>

      <div className="d-flex justify-content-between">
        <span>₹{NIGHTLY_RATE.toLocaleString()} x {nights || 3} nights</span>
        <span>₹{subtotal || NIGHTLY_RATE * 3}</span>
      </div>
      <div className="d-flex justify-content-between">
        <a href="#">Airbnb service fee</a>
        <span>₹{SERVICE_FEE.toLocaleString()}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between fw-bold">
        <span>Total before taxes</span>
        <span>₹{total.toLocaleString()}</span>
      </div>
    </div>
  );
};
export default BookingCard;