import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Journey from './pages/Journey/Journey'
import Phase from './pages/Phase/Phase'
import Biography from './pages/Biography/Biography'
import Quiz from './pages/Quiz/Quiz'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="journey" element={<Journey />} />
        <Route path="phase/:id" element={<Phase />} />
        <Route path="biography" element={<Biography />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
