type PlaceholderViewProps = {
  title: string
  desc: string
}

export function PlaceholderView({ title, desc }: PlaceholderViewProps) {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-8 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-3 text-zinc-500">{desc}</p>
    </main>
  )
}
