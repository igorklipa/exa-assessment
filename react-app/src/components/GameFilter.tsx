import React from 'react'

import type { GameModeFilter } from '../utils/types'

interface Props {
  searchQuery: string
  modeFilter: GameModeFilter
  onSearch: (v: string) => void
  onModeChange: (v: GameModeFilter) => void
  resultCount: number
  totalCount: number
}

export default function Filter({
  searchQuery,
  modeFilter,
  onSearch,
  onModeChange,
  resultCount,
  totalCount,
}: Props) {
  return (
    <div className="bg-slate-800 p-4 mb-6 rounded border border-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          placeholder="Search by player, mode, or result..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="px-3 py-2 bg-slate-700 text-white border border-slate-600 rounded placeholder-slate-500"
        />

        <select
          value={modeFilter}
          onChange={(e) => onModeChange(e.target.value as any)}
          className="px-3 py-2 bg-slate-700 text-white border border-slate-600 rounded"
        >
          <option value="All">All modes</option>
          <option value="Solo">Solo</option>
          <option value="Duo">Duo</option>
          <option value="Squad">Squad</option>
        </select>
      </div>

      <div className="text-xs text-slate-400">
        Showing {resultCount} of {totalCount} • Live
      </div>
    </div>
  )
}
