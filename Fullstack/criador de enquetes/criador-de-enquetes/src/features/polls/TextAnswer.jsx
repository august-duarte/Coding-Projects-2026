import PollForm from "./PollForm"

const MAX_LENGTH = 100

const INDENT_CLASS =
  "ml-6 flex flex-col gap-1 border-l border-zinc-700 pl-4"

function TextAnswer({ value, onChange, disabled = false }) {
  return (
    <div className={INDENT_CLASS}>
      <PollForm
        label="Resposta em texto"
        value={value}
        onChange={onChange}
        placeholder="O participante digitará aqui"
        maxLength={MAX_LENGTH}
        disabled={disabled}
      />
      <p className="text-right text-xs text-zinc-500">
        {value.length}/{MAX_LENGTH}
      </p>
    </div>
  )
}

export default TextAnswer
