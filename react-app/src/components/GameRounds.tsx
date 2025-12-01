import React, { useState, useEffect, useMemo } from 'react'

import GameFilter from './GameFilter'
import RoundsList from './RoundsList'

import type { GameModeFilter, GameRound } from '../utils/types'
import { WEB_SOCKET_RESPONSE } from '../utils/web-socket-mock'
import { DUMMY_ROUNDS } from '../utils/dummy-data'

export default function GameRounds() {
  const [rounds, setRounds] = useState<GameRound[]>(DUMMY_ROUNDS)
  const [searchQuery, setSearchQuery] = useState('')
  const [modeFilter, setModeFilter] = useState<GameModeFilter>('All')

  // Simulated real-time WebSocket updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRounds((prev) => [WEB_SOCKET_RESPONSE(), ...prev].slice(0, 20))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const filtered = useMemo(() => {
    return rounds.filter((round) => {
      if (modeFilter !== 'All' && round.mode !== modeFilter) return false

      if (searchQuery.trim()) {
        const searchTerm = searchQuery.toLowerCase()
        return (
          round.player1.toLowerCase().includes(searchTerm) ||
          round.player2.toLowerCase().includes(searchTerm) ||
          round.mode.toLowerCase().includes(searchTerm) ||
          round.result.toLowerCase().includes(searchTerm)
        )
      }

      return true
    })
  }, [rounds, searchQuery, modeFilter])

  return (
    <div className="min-h-screen bg-slate-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-1">Game Rounds</h1>
          <p className="text-slate-400">Real-time game results</p>
        </div>

        <GameFilter
          searchQuery={searchQuery}
          modeFilter={modeFilter}
          onSearch={setSearchQuery}
          onModeChange={setModeFilter}
          resultCount={filtered.length}
          totalCount={rounds.length}
        />

        <RoundsList rounds={filtered} />
      </div>
    </div>
  )
}
