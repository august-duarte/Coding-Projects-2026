import AddQuestionButton from "./AddQuestionButton"
import PollForm from "./PollForm"
import RemoveQuestionButton from "./RemoveQuestionButton"

const INDENT_CLASS =
  "ml-6 flex flex-col gap-2 border-l border-zinc-700 pl-4"

const VARIANTS = {
  single: {
    label: "Opções (escolha única)",
    inputType: "radio",
    inputClassName: "mt-3 h-4 w-4 shrink-0 accent-zinc-400",
  },
  multiple: {
    label: "Opções (múltipla escolha)",
    inputType: "checkbox",
    inputClassName: "mt-3 h-4 w-4 shrink-0 rounded accent-zinc-400",
  },
}

function ChoiceAnswers({ variant, options, onChange }) {
  const { label, inputType, inputClassName } = VARIANTS[variant]

  function updateOption(index, value) {
    onChange(
      options.map((option, i) => (i === index ? value : option))
    )
  }

  function handleAddOption() {
    onChange([...options, ""])
  }

  function handleRemoveOption(index) {
    if (options.length <= 1) return
    onChange(options.filter((_, i) => i !== index))
  }

  return (
    <div className={INDENT_CLASS}>
      <span className="text-sm font-medium text-zinc-400">{label}</span>

      {options.map((option, index) => (
        <div key={index} className="flex items-start gap-2">
          <input
            type={inputType}
            disabled
            className={inputClassName}
            aria-hidden
          />
          <PollForm
            className="min-w-0 flex-1"
            value={option}
            onChange={(value) => updateOption(index, value)}
            placeholder={`Opção ${index + 1}`}
            action={
              <RemoveQuestionButton
                index={index}
                disabled={options.length <= 1}
                onRemove={() => handleRemoveOption(index)}
                ariaLabel={`Remover opção ${index + 1}`}
              />
            }
          />
        </div>
      ))}

      <AddQuestionButton
        onAdd={handleAddOption}
        ariaLabel="Adicionar opção"
      />
    </div>
  )
}

export default ChoiceAnswers
