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

const ACTION_BUTTON_CLASS =
  "rounded-lg border border-zinc-600 bg-zinc-900/60 px-3 py-1.5 text-center text-xs font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500 sm:text-sm"

const REMOVE_BUTTON_CLASS =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-900/60 text-lg font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500"

function PollListItem() {
  const { polls, removePoll } = usePolls()

  return (
    <ul className="flex h-full min-h-0 w-full flex-col gap-2">
      {polls.map((p) => (
        <li key={p.id}>
          <div className="flex min-h-0 shrink-0 items-stretch gap-2 rounded-lg border border-zinc-600 bg-zinc-900/60 text-sm text-zinc-100 sm:text-base">
            <div className="flex items-center border-r border-zinc-600 px-2 py-2">
              <button
                type="button"
                onClick={() => removePoll(p.id)}
                className={REMOVE_BUTTON_CLASS}
                aria-label={`Remover enquete ${p.title || "Sem título"}`}
              >
                ×
              </button>
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 px-3 py-2">
              <span className="font-medium">{p.title || "Sem título"}</span>
              <span className="text-xs text-zinc-400">
                {formatCreatedAt(p.createdAt)}
              </span>
            </div>

            <div className="flex flex-col justify-center gap-1 border-l border-zinc-600 px-2 py-2">
              <Link
                to={`/responder-enquete/${p.id}`}
                className={ACTION_BUTTON_CLASS}
              >
                Responder
              </Link>
              <Link
                to={`/respostas/${p.id}`}
                className={ACTION_BUTTON_CLASS}
              >
                Ver respostas
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default PollListItem
