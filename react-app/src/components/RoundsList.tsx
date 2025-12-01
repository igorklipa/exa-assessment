import RoundCard from './RoundCard'
import type { GameRound } from '../utils/types'

interface Props {
  rounds: GameRound[]
}

export default function RoundsList({ rounds }: Props) {
  if (rounds.length === 0) {
    return (
      <div className="bg-slate-800 p-6 rounded text-center border border-slate-700">
        <p className="text-slate-400">No rounds match your filters.</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {rounds.map((round) => (
        <RoundCard round={round} key={round.id} />
      ))}
    </div>
  )
}
