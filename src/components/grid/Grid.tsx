import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'
import { CONFIG } from '../../constants/config'

type Props = {
  guesses: string[][]
  currentGuess: string[]
}

export const Grid = ({ guesses, currentGuess }: Props) => {
  const empties =
    guesses.length < CONFIG.tries - 1
      ? Array.from(Array(CONFIG.tries - 1 - guesses.length))
      : []

  return (
    <div className="pb-6">
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} />
      ))}
      {guesses.length < CONFIG.tries && <CurrentRow guess={currentGuess} />}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}
