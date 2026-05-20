function PollForm({
  label,
  value,
  onChange,
  placeholder,
  className = "",
  inputClassName = "",
}) {
  return (
    <label
      className={`flex w-full flex-col gap-1.5 text-left ${className}`}
    >
      {label ? (
        <span className="text-sm font-medium text-zinc-400">{label}</span>
      ) : null}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-zinc-600 bg-zinc-900/60 px-3 py-2 text-base text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 ${inputClassName}`}
      />
    </label>
  )
}

export default PollForm
