import { useState } from "react";
import PropType from 'prop-types'

function CustomDrawnNums({setDrawnNums}) {
  const [input, setInput] = useState('');

  const changeDrawnNums = (e) => {
    e.preventDefault();
    const inputArr = input.replace(/[[\]\s]/g, '').split(',');
    const numArr = inputArr.map(el => Number(el));
    setDrawnNums(new Set(numArr));
  }

  return (
    <form onSubmit={(e) => changeDrawnNums(e)}>
      <input
      type="text"
      placeholder="Enter an array of numbers between 1-75."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="submit">Set Drawn Numbers</button>
    </form>
  )
}

CustomDrawnNums.propTypes = {
  setDrawnNums: PropType.func.isRequired
}

export default CustomDrawnNums;