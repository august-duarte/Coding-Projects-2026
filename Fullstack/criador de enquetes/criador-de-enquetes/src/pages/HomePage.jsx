import PageCard from "../components/layout/PageCard"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <>
      <Link to="/criar" className="contents">
        <PageCard className="flex-none basis-auto h-1/4" ariaLabel="Criar enquete">
          Criar enquete
        </PageCard>
      </Link>

      <PageCard ariaLabel="Enquetes passadas">
        Enquetes passadas
      </PageCard>
    </>
  )
}

export default HomePage