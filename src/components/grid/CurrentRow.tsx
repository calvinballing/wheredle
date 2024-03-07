import { Cell } from './Cell'
import { CONFIG } from '../../constants/config'

type Props = {
  guess: string[]
}

export const CurrentRow = ({ guess }: Props) => {
  const splitGuess = guess
  const emptyCells = Array.from(Array(CONFIG.wordLength - splitGuess.length))

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
