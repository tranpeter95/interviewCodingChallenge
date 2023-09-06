import PropTypes from 'prop-types'

function Draw({draw, disabled}) {
  return (
    <button
    onClick={() => {draw()}}
    disabled={disabled}>
    Draw a Number
    </button>
  )
}

Draw.propTypes = {
  draw: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default Draw;