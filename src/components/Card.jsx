import PropTypes from 'prop-types'

function Card({ card, drawnNums }) {
  return (
    <div className="card-grid">
      {card.map((value, index) => {
        const isMatch = drawnNums.has(value);
        return (
          <div
            key={index}
            className={`card-cell ${isMatch || index === 12 ? "match" : ""}`}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.array.isRequired,
  drawnNums: PropTypes.instanceOf(Set).isRequired
}

export default Card;