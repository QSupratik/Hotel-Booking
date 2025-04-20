import { useRef } from 'react';

const rooms = [
  { id: 1, title: 'Bedroom 1', bed: '1 queen bed' },
  { id: 2, title: 'Bedroom 2', bed: '1 king bed' },
  { id: 3, title: 'Bedroom 3', bed: '2 twin beds' },
  { id: 4, title: 'Bedroom 4', bed: '1 double bed' },
  { id: 5, title: 'Bedroom 5', bed: '1 bunk bed' },
];

const BedroomSlider = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth / 3; // 3 cards visible
    container.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container py-4 position-relative">
      <h4 className="mb-3">Where you'll sleep</h4>

      {/* Arrow Buttons */}
      <button
        onClick={() => scroll('left')}
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-3"
        style={{ zIndex: 5 }}
      >
        ‹
      </button>
      <button
        onClick={() => scroll('right')}
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-3"
        style={{ zIndex: 5 }}
      >
        ›
      </button>

      {/* Scrollable Card Container */}
      <div
        ref={scrollRef}
        className="d-flex overflow-auto gap-3 px-5 py-2"
        style={{ scrollBehavior: 'smooth' }}
      >
        {rooms.map((room) => (
          <div
            key={room.id}
            className="card flex-shrink-0"
            style={{ width: '30%' }}
          >
            <div className="card-body">
              <h5 className="card-title">{room.title}</h5>
              <p className="card-text">{room.bed}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BedroomSlider;
