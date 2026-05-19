import PageCard from "../components/layout/PageCard"
import { Link } from "react-router-dom"
import PastPollsPanels from "../features/polls/PastPollsPanels"

function HomePage() {
  return (
    <>
      <Link to="/criar" className="contents">
        <PageCard className="flex-none basis-auto h-1/4" ariaLabel="Criar enquete">
          Criar enquete
        </PageCard>
      </Link>

      <PageCard ariaLabel="Enquetes passadas" className="items-stretch justify-start">
        <PastPollsPanels />
      </PageCard>
    </>
  )
}

export default HomePage