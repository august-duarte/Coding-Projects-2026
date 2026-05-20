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

export default getPolls
