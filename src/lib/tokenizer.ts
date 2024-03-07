import { ORTHOGRAPHY } from '../constants/orthography'

export const SORTED_ORTHOGRAPHY = [...ORTHOGRAPHY].sort(
  (a, b) => b.length - a.length
)
export const ORTHOGRAPHY_PATTERN = new RegExp(
  '(' + SORTED_ORTHOGRAPHY.join('|') + '|.)',
  'g'
)
