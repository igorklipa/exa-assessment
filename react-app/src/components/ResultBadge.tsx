interface Props {
  result: string
}

const resultStyles: Record<string, string> = {
  Win: 'bg-green-900 text-green-200',
  Loss: 'bg-red-900 text-red-200',
  Draw: 'bg-yellow-900 text-yellow-200',
}

export default function ResultBadge({ result }: Props) {
  return (
    <span
      className={`text-xs px-2 py-1 rounded ${
        resultStyles[result] ?? 'bg-slate-700 text-slate-200'
      }`}
    >
      {result}
    </span>
  )
}
