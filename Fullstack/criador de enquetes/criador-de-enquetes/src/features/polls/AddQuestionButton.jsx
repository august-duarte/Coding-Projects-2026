function AddQuestionButton({ onAdd, ariaLabel = "Adicionar pergunta" }) {
  return (
    <button
      type="button"
      onClick={onAdd}
      className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-lg border border-zinc-600 bg-zinc-900/60 text-xl font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500"
      aria-label={ariaLabel}
    >
      +
    </button>
  )
}

export default AddQuestionButton
