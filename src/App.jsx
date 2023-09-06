import { useEffect, useState } from 'react'
import Card from './components/Card'
import DrawnNums from './components/DrawnNums'
import Draw from './components/Draw'
import Refresh from './components/Refresh'
import CustomCard from './components/CustomCard'
import CustomDrawnNums from './components/CustomDrawnNums'
import { checkWin, drawNum, generateCard } from './helpers'

function App() {

  const [card, setCard] = useState(generateCard());
  const [drawnNums, setDrawnNums] = useState(new Set());
  const [hasWon, setHasWon] = useState(false);

  const refresh = () => {
    setCard(generateCard());
    setDrawnNums(new Set());
    setHasWon(false);
  }

  const draw = () => {
    if (drawnNums.size < 75) {
      let newNum = drawNum();
      while (drawnNums.has(newNum)) {
        newNum = drawNum();
      }
      setDrawnNums((prev) => new Set([...prev, newNum]));
    }
  }

    useEffect(() => {
    if (checkWin(card, drawnNums)) {
      setHasWon(true);
    } else {
      setHasWon(false)
    }
  }, [card, drawnNums]);

  return (
  <>
  <Card card={card} drawnNums={drawnNums}/>
  <Draw draw={draw} disabled={drawnNums.size >= 75 || hasWon}/>
  <Refresh refresh={refresh}/>
  <CustomCard setCard={setCard}/>
  <CustomDrawnNums setDrawnNums={setDrawnNums} />
  <DrawnNums drawnNums={Array.from(drawnNums)}/>
  {hasWon ? (
    <p>You Win!</p>
  ) : null}
  </>
  )
}
export default App
