import { useParams } from "react-router-dom"
import getPolls from "../lib/pollStorage"

function AnswerPollPage() {
  const { id } = useParams()
  const found = getPolls().find((p) => p.id === id)
  const poll = found ? JSON.parse(JSON.stringify(found)) : null

  if (!poll) {
    return (
      <p className="text-sm text-zinc-400">Enquete não encontrada.</p>
    )
  }

  return (
    <div className="flex w-1/2 max-w-full flex-col items-stretch gap-4 self-center text-left">
      <h2 className="py-3 text-xl font-semibold text-zinc-100 sm:text-2xl">
        {poll.title || "Sem título"}
      </h2>

      {poll.questions.map((question, index) => (
        <div key={index} className="flex flex-col gap-1">
          <span className="text-sm font-medium text-zinc-400">
            Pergunta {index + 1}
          </span>
          <p className="rounded-lg border border-zinc-600 bg-zinc-900/60 px-3 py-2 text-base text-zinc-100">
            {question.text || "—"}
          </p>
          {renderAnswerInput(question, index)}
        </div>
      ))}
    </div>
  )
}

export default AnswerPollPage
