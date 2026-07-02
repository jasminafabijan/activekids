import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import CategoryPage from './pages/CategoryPage'
import SchoolDetailPage from './pages/SchoolDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kategorija/:slug" element={<CategoryPage />} />
        <Route path="/skola/:slug" element={<SchoolDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
