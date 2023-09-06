import PropTypes from 'prop-types'

function Refresh({refresh}) {
  return (
    <button onClick={() => refresh()}>
      Refresh Card
      </button>
  )
}

Refresh.propTypes = {
  refresh: PropTypes.func.isRequired
}

export default Refresh;