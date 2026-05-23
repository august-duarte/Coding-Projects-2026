import { Link } from "react-router-dom"
import usePolls from "./usePolls"

function formatCreatedAt(iso) {
  if (!iso) return "Data desconhecida"
  return new Date(iso).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

function PollListItem() {
  const { polls } = usePolls()

  return (
    <ul className="flex h-full min-h-0 w-full flex-col gap-2">
      {polls.map((p) => (
        <li key={p.id}>
          <Link
            to={`/responder-enquete/${p.id}`}
            className="flex min-h-0 shrink-0 flex-col gap-1 rounded-lg border border-zinc-600 bg-zinc-900/60 px-3 py-2 text-sm text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 sm:text-base"
          >
            <span className="font-medium">{p.title || "Sem título"}</span>
            <span className="text-xs text-zinc-400">
              {formatCreatedAt(p.createdAt)}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PollListItem
