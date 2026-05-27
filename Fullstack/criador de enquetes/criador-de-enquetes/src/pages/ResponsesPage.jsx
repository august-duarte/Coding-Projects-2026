import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TextAnswer from "../features/polls/TextAnswer"
import getPolls from "../lib/pollStorage"

const CHOICE_ROW_CLASS =
  "flex items-center gap-3 rounded-lg border border-zinc-700 bg-zinc-900/40 px-3 py-2"
const CHOICE_GROUP_CLASS =
  "ml-6 flex flex-col gap-2 border-l border-zinc-700 pl-4"

const ANSWER_VARIANTS = {
  single: {
    inputType: "radio",
    inputClassName:
      "h-4 w-4 shrink-0 appearance-none rounded-full border border-zinc-500 bg-zinc-950/30 shadow-sm transition-colors checked:border-zinc-200 checked:bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:opacity-60",
  },
  multiple: {
    inputType: "checkbox",
    inputClassName:
      "h-4 w-4 shrink-0 appearance-none rounded border border-zinc-500 bg-zinc-950/30 shadow-sm transition-colors checked:border-zinc-200 checked:bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:opacity-60",
  },
}

function ResponsesPage() {
  const { id } = useParams()
  const [currentIndex, setCurrentIndex] = useState(0)
  const found = getPolls().find((poll) => poll.id === id)
  const poll = found ? JSON.parse(JSON.stringify(found)) : null
  const responses = poll?.responses ?? []
  const currentResponse = responses[currentIndex] ?? null

  useEffect(() => {
    setCurrentIndex(0)
  }, [id])

  useEffect(() => {
    if (responses.length === 0) {
      setCurrentIndex(0)
      return
    }

    if (currentIndex > responses.length - 1) {
      setCurrentIndex(responses.length - 1)
    }
  }, [responses.length, currentIndex])

  if (!poll) {
    return (
      <p className="text-sm text-zinc-400">Enquete não encontrada.</p>
    )
  }

  function renderAnswerInput(question, questionIndex) {
    const answer = currentResponse?.answers?.[questionIndex]

    switch (question.answerType) {
      case "text":
        return (
          <TextAnswer
            value={typeof answer === "string" ? answer : ""}
            onChange={() => {}}
            disabled
          />
        )

      case "single": {
        const { inputType, inputClassName } = ANSWER_VARIANTS.single
        const selected = Number(answer)

        return (
          <div className={CHOICE_GROUP_CLASS}>
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex} className={CHOICE_ROW_CLASS}>
                <input
                  type={inputType}
                  className={inputClassName}
                  name={`question-${questionIndex}`}
                  value={optionIndex}
                  checked={selected === optionIndex}
                  onChange={() => {}}
                  disabled
                />
                <span className="text-sm text-zinc-100">
                  {option || `Opção ${optionIndex + 1}`}
                </span>
              </label>
            ))}
          </div>
        )
      }

      case "multiple": {
        const { inputType, inputClassName } = ANSWER_VARIANTS.multiple
        const selected = Array.isArray(answer)
          ? answer.map((item) => Number(item))
          : []

        return (
          <div className={CHOICE_GROUP_CLASS}>
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex} className={CHOICE_ROW_CLASS}>
                <input
                  type={inputType}
                  className={inputClassName}
                  value={optionIndex}
                  checked={selected.includes(optionIndex)}
                  onChange={() => {}}
                  disabled
                />
                <span className="text-sm text-zinc-100">
                  {option || `Opção ${optionIndex + 1}`}
                </span>
              </label>
            ))}
          </div>
        )
      }

      default:
        return null
    }
  }

  return (
    <div className="flex w-1/2 max-w-full flex-col items-stretch gap-4 self-center text-left">
      <h2 className="py-3 text-xl font-semibold text-zinc-100 sm:text-2xl">
        {poll.title || "Sem título"}
      </h2>

      {responses.length === 0 ? (
        <p className="text-sm text-zinc-400">
          Esta enquete ainda não possui respostas.
        </p>
      ) : null}

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

      <div className="mt-2 flex items-center justify-between gap-3 rounded-lg border border-zinc-700 bg-zinc-900/60 px-3 py-2">
        <button
          type="button"
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          disabled={responses.length === 0 || currentIndex === 0}
          className="rounded-lg border border-zinc-600 bg-zinc-900/60 px-3 py-1 text-sm text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Resposta anterior"
        >
          ←
        </button>

        <p className="text-sm text-zinc-300">
          Resposta {responses.length === 0 ? 0 : currentIndex + 1} de{" "}
          {responses.length}
        </p>

        <button
          type="button"
          onClick={() => setCurrentIndex((prev) => prev + 1)}
          disabled={
            responses.length === 0 || currentIndex >= responses.length - 1
          }
          className="rounded-lg border border-zinc-600 bg-zinc-900/60 px-3 py-1 text-sm text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Próxima resposta"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default ResponsesPage
