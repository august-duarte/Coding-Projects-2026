function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <div
        className="mx-auto flex h-screen min-h-0 w-1/2 max-w-full flex-col border border-zinc-700 bg-zinc-900"
        aria-label="Área do aplicativo"
      >
        <header className="flex shrink-0 items-center justify-center px-6 py-4">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
            Criador de Enquetes
          </h1>
        </header>
        <main
          className="flex min-h-0 flex-1 flex-col items-center gap-4 overflow-auto p-8"
          aria-label="Conteúdo principal"
        >
          <section
            className="flex min-h-0 w-1/2 max-w-full flex-1 basis-0 flex-col items-center justify-center gap-3 self-center rounded-2xl border border-zinc-600 bg-zinc-800 px-4 py-6 text-center text-sm font-medium text-zinc-100 sm:text-base"
            aria-label="Criar enquete"
          >
            criar enquete
          </section>
          <section
            className="flex min-h-0 w-1/2 max-w-full flex-1 basis-0 items-center justify-center self-center rounded-2xl border border-zinc-600 bg-zinc-800 px-4 py-6 text-center text-sm font-medium text-zinc-100 sm:text-base"
            aria-label="Enquetes passadas"
          >
            enquetes passadas
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
