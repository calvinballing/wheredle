import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Guess the WHEREDLE in 7 tries.  You will have to guess both the 5-letter WORD, and WHERE the word is in the ten spaces. After each guess, the color of the tiles
        will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="." status="space" />
        <Cell value="." status="space" />
        <Cell value="." status="space" />
        <Cell value="." status="space" />
        <Cell value="W" status="correct" />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="Y" />
        <Cell value="." status="space" />
      </div>
      <p className="text-sm text-gray-500">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="." status="space" />
        <Cell value="." status="space" />
        <Cell value="P" />
        <Cell value="I" />
        <Cell value="L" status="present" />
        <Cell value="O" />
        <Cell value="T" />
        <Cell value="." status="space" />
        <Cell value="." status="space" />
        <Cell value="." status="space" />
      </div>
      <p className="text-sm text-gray-500">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell value="U" status="absent" />
        <Cell value="E" />
        <Cell value="." status="space" />
        <Cell value="." status="space" />
        <Cell value="." status="space" />
        <Cell value="." status="space" />
      </div>
      <p className="text-sm text-gray-500">
        The letter U is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
