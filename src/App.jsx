import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuizSetupPage from './pages/QuizSetup'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz-setup" element={<QuizSetupPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App