import { useState } from "react";
import Square from "./Square";

type XO = 'X' | 'O';
const next: Record<XO, XO> = { X: 'O', O: 'X' }
const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

function getGameState(squares: Array<XO | null>) {
  const win = lines.some(([a, b, c]) => squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
  const draw = !win && squares.every(x => x != null)

  if (win) return 'win'
  if (draw) return 'draw'
  return 'playing'
}



export default function Board() {
  const [current, setCurrent] = useState<XO>(Math.random() < 0.5 ? 'X' : 'O')
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [gameResult, setGameResult] = useState<string | null>(null)

  const handleValueChanged = (idx: number) => {
    if (squares[idx] === null) {
      const res = squares.with(idx, current)
      setSquares(res)
      handleGameState(res)
      setCurrent(next[current])
    }
  }


  const handleGameState = (board: Array<XO | null>) => {
    const state = getGameState(board);
    switch (state) {
      case 'win':
        setGameResult(`Player ${current} wins!`)
        break;
      case 'draw':
        setGameResult(`It's a draw`)
        break;
    }
  }

  const handleReset = () => {
    setSquares(Array(9).fill(null))
    setGameResult(null)
  }

  return (
    <>
      {gameResult && <>
        <div className="game-result">Result: {gameResult}</div>
        <div><button onClick={handleReset}>Play again</button></div>
      </>}

      <div>Current player: {current}</div>
      <div className="board-row">
        <Square value={squares[0]} disabled={!!gameResult} onValueChanged={() => handleValueChanged(0)} />
        <Square value={squares[1]} disabled={!!gameResult} onValueChanged={() => handleValueChanged(1)} />
        <Square value={squares[2]} disabled={!!gameResult} onValueChanged={() => handleValueChanged(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} disabled={!!gameResult} onValueChanged={() => handleValueChanged(3)} />
        <Square value={squares[4]} disabled={!!gameResult} onValueChanged={() => handleValueChanged(4)} />
        <Square value={squares[5]} disabled={!!gameResult} onValueChanged={() => handleValueChanged(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} disabled={!!gameResult} onValueChanged={() => handleValueChanged(6)} />
        <Square value={squares[7]} disabled={!!gameResult} onValueChanged={() => handleValueChanged(7)} />
        <Square value={squares[8]} disabled={!!gameResult} onValueChanged={() => handleValueChanged(8)} />
      </div>
    </>
  );
}