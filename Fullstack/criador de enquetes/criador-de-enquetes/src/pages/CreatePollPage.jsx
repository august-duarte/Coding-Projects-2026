import PollForm from "../features/polls/PollForm"
import { useState } from "react"

function CreatePollPage() {
  const [title, setTitle] = useState("")
  const [questionCount, setQuestionCount] = useState(1)
  const [questions, setQuestions] = useState([""])

  function updateQuestion(index, value) {
    setQuestions((prev) => {
      const next = [...prev]
      next[index] = value
      return next
    })
  }

  function removeQuestion(index) {
    function handleRemoveQuestion() {
      if (questionCount <= 1) return

      setQuestionCount((prev) => prev - 1)
      setQuestions((prev) =>
        prev.filter((_, i) => i !== index)
      )
    }

    return (
      <button
        type="button"
        onClick={handleRemoveQuestion}
        disabled={questionCount <= 1}
        className="flex w-8 shrink-0 self-stretch items-center justify-center rounded-lg border border-zinc-600 bg-zinc-900/60 text-lg font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-zinc-600 disabled:hover:bg-zinc-900/60"
        aria-label={`Remover pergunta ${index + 1}`}
      >
        −
      </button>
    )
  }

  function addQuestion() {
    function handleAddQuestion() {
      setQuestionCount((prev) => prev + 1)
      setQuestions((prev) => [...prev, ""])
    }

    return (
      <button
        type="button"
        onClick={handleAddQuestion}
        className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-lg border border-zinc-600 bg-zinc-900/60 text-xl font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500"
        aria-label="Adicionar pergunta"
      >
        +
      </button>
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

      {Array.from({ length: questionCount }, (_, index) => (
        <PollForm
          key={index}
          label={`Pergunta ${index + 1}`}
          value={questions[index] ?? ""}
          onChange={(value) => updateQuestion(index, value)}
          placeholder="Insira texto aqui"
          action={removeQuestion(index)}
        />
      ))}

      {addQuestion()}
    </div>
  )
}

export default CreatePollPage
