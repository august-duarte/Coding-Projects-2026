import { useState } from "react"
import { useParams } from "react-router-dom"
import TextAnswer from "../features/polls/TextAnswer"
import getPolls, { saveResponse } from "../lib/pollStorage"

const CHOICE_ROW_CLASS =
  "flex items-center gap-3 rounded-lg border border-zinc-700 bg-zinc-900/40 px-3 py-2"
const CHOICE_GROUP_CLASS =
  "ml-6 flex flex-col gap-2 border-l border-zinc-700 pl-4"

const ANSWER_VARIANTS = {
  single: {
    inputType: "radio",
    inputClassName:
      "h-4 w-4 shrink-0 appearance-none rounded-full border border-zinc-500 bg-zinc-950/30 shadow-sm transition-colors checked:border-zinc-200 checked:bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-500",
  },
  multiple: {
    inputType: "checkbox",
    inputClassName:
      "h-4 w-4 shrink-0 appearance-none rounded border border-zinc-500 bg-zinc-950/30 shadow-sm transition-colors checked:border-zinc-200 checked:bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-500",
  },
}

function AnswerPollPage() {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const { id } = useParams()
  const found = getPolls().find((p) => p.id === id)
  const poll = found ? JSON.parse(JSON.stringify(found)) : null

  if (!poll) {
    return (
      <p className="text-sm text-zinc-400">Enquete não encontrada.</p>
    )
  }

  function handleSubmit() {
    const saved = saveResponse(id, answers)
    if (saved) setSubmitted(true)
  }

  function renderAnswerInput(question, questionIndex) {
    switch (question.answerType) {
      case "text":
        return (
          <TextAnswer
            value={answers[questionIndex] ?? ""}
            onChange={(text) =>
              setAnswers((prev) => ({ ...prev, [questionIndex]: text }))
            }
          />
        )

      case "single": {
        const { inputType, inputClassName } = ANSWER_VARIANTS.single
        const selected = answers[questionIndex]

        return (
          <div className={CHOICE_GROUP_CLASS}>
            {question.options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className={CHOICE_ROW_CLASS}
              >
                <input
                  type={inputType}
                  className={inputClassName}
                  name={`question-${questionIndex}`}
                  value={optionIndex}
                  checked={selected === optionIndex}
                  onChange={() =>
                    setAnswers((prev) => ({
                      ...prev,
                      [questionIndex]: optionIndex,
                    }))
                  }
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
        const selected = answers[questionIndex] ?? []

        return (
          <div className={CHOICE_GROUP_CLASS}>
            {question.options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className={CHOICE_ROW_CLASS}
              >
                <input
                  type={inputType}
                  className={inputClassName}
                  value={optionIndex}
                  checked={selected.includes(optionIndex)}
                  onChange={() => {
                    setAnswers((prev) => {
                      const current = prev[questionIndex] ?? []
                      const next = current.includes(optionIndex)
                        ? current.filter((i) => i !== optionIndex)
                        : [...current, optionIndex]
                      return { ...prev, [questionIndex]: next }
                    })
                  }}
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

      <button
        type="button"
        onClick={handleSubmit}
        className="self-start rounded-lg border border-zinc-400 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-500"
      >
        Enviar respostas
      </button>

      {submitted ? (
        <p className="text-sm text-zinc-400">Respostas enviadas com sucesso.</p>
      ) : null}
    </div>
  )
}

export default AnswerPollPage
