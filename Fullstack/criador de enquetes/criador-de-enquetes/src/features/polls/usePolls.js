import { useEffect, useState } from "react"
import getPolls from "../../lib/pollStorage"

function usePolls() {
  const [polls, setPolls] = useState([])

  useEffect(() => {
    setPolls(getPolls())
  }, [])

  return { polls }
}

export default usePolls