import usePolls from "./usePolls";

function PollListItem() {
  const { polls } = usePolls();
  return (
    <ul className="flex h-full min-h-0 w-full flex-col gap-2">
      {polls.map((p) => (
        <li
          key={p.id}
          className="flex h-1/8 shrink-0 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-900/60 px-3 text-sm font-medium text-zinc-100 sm:text-base"
        >
          {p.name}
        </li>
      ))}
    </ul>
  );
}

export default PollListItem