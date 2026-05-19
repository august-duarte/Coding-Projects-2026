import { Routes, Route } from "react-router-dom"
import AppShell from "./components/layout/AppShell"
import HomePage from "./pages/HomePage"
import CreatePollPage from "./pages/CreatePollPage"

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/criar" element={<CreatePollPage />} />
      </Route>
    </Routes>
  )
}

export default App