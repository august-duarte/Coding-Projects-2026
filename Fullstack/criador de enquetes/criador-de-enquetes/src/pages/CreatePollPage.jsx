import PollForm from "../features/polls/PollForm"
import { useState } from "react"

const QUESTION_COUNT = 5

function CreatePollPage() {
  const [title, setTitle] = useState("")
  const [questions, setQuestions] = useState(
    () => Array.from({ length: QUESTION_COUNT }, () => "")
  )

  function updateQuestion(index, value) {
    setQuestions((prev) =>
      prev.map((question, i) => (i === index ? value : question))
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
        <PollForm
          key={index}
          label={`Pergunta ${index + 1}`}
          value={question}
          onChange={(value) => updateQuestion(index, value)}
          placeholder={`Pergunta ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default CreatePollPage
