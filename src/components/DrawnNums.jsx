import PropTypes from 'prop-types'

function DrawnNums({drawnNums}) {

  const display = drawnNums.join(', ');
  return (
    <div>
      Drawn Numbers: {display}
    </div>
  )
}

DrawnNums.propTypes = {
  drawnNums: PropTypes.array.isRequired
}

export default DrawnNums;