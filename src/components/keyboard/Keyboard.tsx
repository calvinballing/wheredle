import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ORTHOGRAPHY } from '../../constants/orthography'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[][]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      }
      // Take away key event listener for now
      // else {
      //   const key = e.key.toUpperCase()
      //   if (key.length === 1 && key >= 'A' && key <= 'Z') {
      //     onChar(key)
      //   }
      // }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key width={240} value='.' onClick={onClick}>
          Space
        </Key>
      </div>
      <div className="flex justify-center mb-1">
        {ORTHOGRAPHY.slice(0, Math.floor(ORTHOGRAPHY.length * 0.4)).map(
          (char) => (
            <Key value={char} onClick={onClick} status={charStatuses[char]} />
          )
        )}
      </div>
      <div className="flex justify-center mb-1">
        {ORTHOGRAPHY.slice(
          Math.floor(ORTHOGRAPHY.length * 0.4),
          Math.floor(ORTHOGRAPHY.length * 0.74)
        ).map((char) => (
          <Key value={char} onClick={onClick} status={charStatuses[char]} />
        ))}
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          Enter
        </Key>
        {ORTHOGRAPHY.slice(
          Math.floor(ORTHOGRAPHY.length * 0.74),
          ORTHOGRAPHY.length
        ).map((char) => (
          <Key value={char} onClick={onClick} status={charStatuses[char]} />
        ))}
        <Key width={65.4} value="DELETE" onClick={onClick}>
          Delete
        </Key>
      </div>
    </div>
  )
}
