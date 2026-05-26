import { useState } from "react"
import { useParams } from "react-router-dom"
import { VARIANTS } from "../features/polls/ChoiceAnswers"
import TextAnswer from "../features/polls/TextAnswer"
import getPolls from "../lib/pollStorage"

const CHOICE_ROW_CLASS = "flex items-start gap-2"
const CHOICE_GROUP_CLASS =
  "ml-6 flex flex-col gap-2 border-l border-zinc-700 pl-4"

function AnswerPollPage() {
  const [answers, setAnswers] = useState({})
  const { id } = useParams()
  const found = getPolls().find((p) => p.id === id)
  const poll = found ? JSON.parse(JSON.stringify(found)) : null

  if (!poll) {
    return (
      <p className="text-sm text-zinc-400">Enquete não encontrada.</p>
    )
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
        const { inputType, inputClassName } = VARIANTS.single
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
        const { inputType, inputClassName } = VARIANTS.multiple
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
    </div>
  )
}

export default AnswerPollPage
