import { useState } from "react";
import PropType from 'prop-types'

function CustomCard({setCard}) {

  const [input, setInput] = useState('');

  const changeCard = (e) => {
    e.preventDefault();
    const inputArr = input.replace(/[[\]\s]/g, '').split(',');
    const numArr = inputArr.map((el) => {
      if (el === "'FREE'") {
        return 'FREE';
      } else {
        return Number(el)
      }
    })
    
    setCard(numArr);
  }

  return (
    <form onSubmit={(e) => changeCard(e)}>
      <input 
        type="text"
        placeholder="Enter an array of 24 numbers between 1-75. Index 12 must be 'FREE'"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="submit">Set Custom Card</button>
    </form>
  );

}

CustomCard.propTypes = {
  setCard: PropType.func.isRequired
}

export default CustomCard;