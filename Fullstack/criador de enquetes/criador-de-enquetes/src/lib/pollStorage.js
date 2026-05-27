export const STORAGE_KEY = "criador-de-enquetes:polls"

function getPolls() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return []

  try {
    const polls = JSON.parse(stored)
    return Array.isArray(polls) ? polls : []
  } catch {
    return []
  }
}

export function savePoll(poll) {
  const polls = getPolls()
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...polls, poll]))
}

export function saveResponse(pollId, answers) {
  const polls = getPolls()
  const index = polls.findIndex((poll) => poll.id === pollId)
  if (index === -1) return false

  const response = {
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    answers,
  }

  const poll = polls[index]
  polls[index] = {
    ...poll,
    responses: [...(poll.responses ?? []), response],
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(polls))
  return true
}

export function deletePoll(pollId) {
  const polls = getPolls()
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(polls.filter((poll) => poll.id !== pollId))
  )
}

export default getPolls
