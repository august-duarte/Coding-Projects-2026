function PageCard({ children, ariaLabel, className = "" }) {
  return (
    <section
      className={`flex min-h-0 w-1/2 max-w-full flex-1 basis-0 flex-col items-center justify-center gap-3 self-center rounded-2xl border border-zinc-600 bg-zinc-800 px-4 py-6 text-center text-base font-semibold text-zinc-100 sm:text-2xl ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  )
}

export default PageCard