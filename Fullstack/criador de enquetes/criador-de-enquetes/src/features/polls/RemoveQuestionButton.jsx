function RemoveQuestionButton({
  index,
  disabled,
  onRemove,
  ariaLabel,
}) {
  return (
    <button
      type="button"
      onClick={onRemove}
      disabled={disabled}
      className="flex w-8 shrink-0 self-stretch items-center justify-center rounded-lg border border-zinc-600 bg-zinc-900/60 text-lg font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-zinc-600 disabled:hover:bg-zinc-900/60"
      aria-label={ariaLabel ?? `Remover pergunta ${index + 1}`}
    >
      −
    </button>
  )
}

export default RemoveQuestionButton
