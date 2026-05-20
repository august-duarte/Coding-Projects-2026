import AddQuestionButton from "../features/polls/AddQuestionButton"
import ChoiceAnswers from "../features/polls/ChoiceAnswers"
import PollForm from "../features/polls/PollForm"
import RemoveQuestionButton from "../features/polls/RemoveQuestionButton"
import TextAnswer from "../features/polls/TextAnswer"
import { useState } from "react"

const ANSWER_TYPES = [
  { id: "single", label: "Única escolha" },
  { id: "multiple", label: "Múltipla escolha" },
  { id: "text", label: "Texto" },
]

function createEmptyQuestion() {
  return {
    text: "",
    answerType: "single",
    options: [""],
    textAnswer: "",
  }
}

function CreatePollPage() {
  const [title, setTitle] = useState("")
  const [questions, setQuestions] = useState([createEmptyQuestion()])

  function updateQuestion(index, updates) {
    setQuestions((prev) =>
      prev.map((question, i) =>
        i === index ? { ...question, ...updates } : question
      )
    )
  }

  function handleAddQuestion() {
    setQuestions((prev) => [...prev, createEmptyQuestion()])
  }

  function handleRemoveQuestion(index) {
    if (questions.length <= 1) return
    setQuestions((prev) => prev.filter((_, i) => i !== index))
  }

  function renderAnswers(question, index) {
    if (question.answerType === "single" || question.answerType === "multiple") {
      return (
        <ChoiceAnswers
          variant={question.answerType}
          options={question.options}
          onChange={(options) => updateQuestion(index, { options })}
        />
      )
    }

    return (
      <TextAnswer
        value={question.textAnswer}
        onChange={(textAnswer) => updateQuestion(index, { textAnswer })}
      />
    )
  }

  return (
    <div className="flex w-1/2 max-w-full flex-col items-stretch gap-4 self-center text-left">
      <PollForm
        label="Título"
        value={title}
        onChange={setTitle}
        placeholder="Título da enquete"
        inputClassName="py-3 text-xl font-semibold sm:text-2xl"
      />

      {questions.map((question, index) => (
        <div key={index} className="flex flex-col gap-2">
          <PollForm
            label={`Pergunta ${index + 1}`}
            value={question.text}
            onChange={(text) => updateQuestion(index, { text })}
            placeholder="Insira texto aqui"
            action={
              <RemoveQuestionButton
                index={index}
                disabled={questions.length <= 1}
                onRemove={() => handleRemoveQuestion(index)}
              />
            }
          />

          <div
            className="ml-6 flex flex-wrap gap-2 pl-4"
            role="group"
            aria-label={`Tipo de resposta da pergunta ${index + 1}`}
          >
            {ANSWER_TYPES.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => updateQuestion(index, { answerType: id })}
                className={`rounded-lg border px-3 py-1.5 text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-500 ${
                  question.answerType === id
                    ? "border-zinc-400 bg-zinc-800 text-zinc-100"
                    : "border-zinc-600 bg-zinc-900/60 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {renderAnswers(question, index)}
        </div>
      ))}

      <AddQuestionButton onAdd={handleAddQuestion} />
    </div>
  )
}

export default CreatePollPage
