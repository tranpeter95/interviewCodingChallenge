export function drawNum() {
  return Math.ceil(Math.random() * 75);
}

export function generateCard() {
  const card = Array(25).fill(null);
  const usedNumbers = new Set();
  let i = 0;

  while (i < card.length) {
    const randomNumber = drawNum();
    if (!usedNumbers.has(randomNumber)) {
      card[i] = randomNumber;
      usedNumbers.add(randomNumber);
      i++;
    }
  }

  card[12] = 'FREE';

  return card;
}

export function checkWin(card, drawnNums) {
  const winConditions = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ];

  for (const condition of winConditions) {
    const isWin = condition.every((index) => {
      if (card[index] === 'FREE') {
        return true;
      }
      return drawnNums.has(card[index]);
    });

    if (isWin) {
      return true;
    }
  }

  return false;
}

