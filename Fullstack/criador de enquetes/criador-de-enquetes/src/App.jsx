import { Routes, Route } from "react-router-dom"
import AppShell from "./components/layout/AppShell"
import HomePage from "./pages/HomePage"
import CreatePollPage from "./pages/CreatePollPage"
import AnswerPollPage from "./pages/AnswerPollPage"
import ResponsesPage from "./pages/ResponsesPage"

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/criar" element={<CreatePollPage />} />
        <Route path="/responder-enquete/:id" element={<AnswerPollPage />} />
        <Route path="/respostas/:id" element={<ResponsesPage />} />
      </Route>
    </Routes>
  )
}

export default App