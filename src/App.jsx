import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuizSetupPage from './pages/QuizSetup'
import Quiz from './pages/Quiz'
import Results  from './pages/Results'
import Leaderboard from './pages/LeaderBoard'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz-setup" element={<QuizSetupPage />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/results" element={<Results />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App