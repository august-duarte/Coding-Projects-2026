import { useEffect, useState } from "react"
import getPolls, { deletePoll } from "../../lib/pollStorage"

function usePolls() {
  const [polls, setPolls] = useState([])

  useEffect(() => {
    setPolls(getPolls())
  }, [])

  function removePoll(pollId) {
    deletePoll(pollId)
    setPolls((prev) => prev.filter((poll) => poll.id !== pollId))
  }

  return { polls, removePoll }
}

export default usePolls