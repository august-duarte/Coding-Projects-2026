function PollForm({
  label,
  value,
  onChange,
  placeholder,
  className = "",
  inputClassName = "",
  maxLength,
  action,
  disabled = false,
}) {
  return (
    <label
      className={`flex w-full flex-col gap-1.5 text-left ${className}`}
    >
      {label ? (
        <span className="text-sm font-medium text-zinc-400">{label}</span>
      ) : null}
      <div className="flex items-stretch gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          className={`min-w-0 flex-1 rounded-lg border border-zinc-600 bg-zinc-900/60 px-3 py-2 text-base text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:cursor-not-allowed disabled:opacity-70 ${inputClassName}`}
        />
        {action}
      </div>
    </label>
  )
}

export default PollForm
