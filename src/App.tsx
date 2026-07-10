import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AdminPage from './pages/AdminPage'
import CategoryPage from './pages/CategoryPage'
import SearchResultsPage from './pages/SearchResultsPage'
import SchoolDetailPage from './pages/SchoolDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pretraga" element={<SearchResultsPage />} />
        <Route path="/kategorija/:slug" element={<CategoryPage />} />
        <Route path="/skola/:slug" element={<SchoolDetailPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
