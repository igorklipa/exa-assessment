import { nanoid } from 'nanoid'

import type { GameRound, GameMode, GameResult } from '../utils/types'

export const WEB_SOCKET_RESPONSE = (): GameRound => ({
  id: nanoid(),
  player1: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'][
    Math.floor(Math.random() * 6)
  ],
  player2: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'][
    Math.floor(Math.random() * 6)
  ],
  mode: ['Solo', 'Duo', 'Squad'][Math.floor(Math.random() * 3)] as GameMode,
  result: ['Win', 'Loss', 'Draw'][Math.floor(Math.random() * 3)] as GameResult,
  player1Score: Math.floor(Math.random() * 1500) + 100,
  player2Score: Math.floor(Math.random() * 1500) + 100,
})
