import ResultBadge from './ResultBadge'
import type { GameRound } from '../utils/types'

import './RoundCard.css'

interface Props {
  round: GameRound
}

export default function RoundCard({ round }: Props) {
  return (
    <div className="bg-slate-800 rounded border border-slate-700 p-4 animate-slideIn">
      <div className="grid grid-cols-5 gap-2 items-center mb-3">
        <div>
          <p className="text-xs text-slate-500">Player 1</p>
          <p className="font-semibold text-white">{round.player1}</p>
          <p className="text-lg text-blue-400">{round.player1Score}</p>
        </div>

        <div className="text-center">
          <ResultBadge result={round.result} />
        </div>

        <div className="text-center">
          <p className="text-xs text-slate-500">Player 2</p>
          <p className="font-semibold text-white">{round.player2}</p>
          <p className="text-lg text-purple-400">{round.player2Score}</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-500">Mode</p>
          <p className="font-semibold text-white">{round.mode}</p>
        </div>
      </div>
    </div>
  )
}
