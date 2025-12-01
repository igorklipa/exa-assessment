export type GameMode = 'Solo' | 'Duo' | 'Squad'

export type GameResult = 'Win' | 'Loss' | 'Draw'

export type ResultRecord = {
  id: string
  player: string
  score: number
  result: GameResult
  mode: GameMode
}

export type GameRound = {
  id: string
  player1: string
  player2: string
  mode: GameMode
  result: GameResult
  player1Score: number
  player2Score: number
}

export type GameModeFilter = GameMode | 'All'
