import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './components/HomePage'
import AdminPage from './pages/AdminPage'
import CategoryPage from './pages/CategoryPage'
import SearchResultsPage from './pages/SearchResultsPage'
import SchoolDetailPage from './pages/SchoolDetailPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <main className="app-shell-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pretraga" element={<SearchResultsPage />} />
            <Route path="/kategorija/:slug" element={<CategoryPage />} />
            <Route path="/skola/:slug" element={<SchoolDetailPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
