import type { GameRound } from '../utils/types'

export const DUMMY_ROUNDS: GameRound[] = [
  {
    id: 'ID1',
    player1: 'Alice',
    player2: 'Bob',
    mode: 'Solo',
    result: 'Win',
    player1Score: 1250,
    player2Score: 980,
  },
  {
    id: 'ID2',
    player1: 'Charlie',
    player2: 'Diana',
    mode: 'Duo',
    result: 'Loss',
    player1Score: 650,
    player2Score: 920,
  },
  {
    id: 'ID3',
    player1: 'Eve',
    player2: 'Frank',
    mode: 'Squad',
    result: 'Draw',
    player1Score: 800,
    player2Score: 800,
  },
]
