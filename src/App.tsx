import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './components/HomePage'
import AboutPage from './pages/AboutPage'
import CategoryPage from './pages/CategoryPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import SearchResultsPage from './pages/SearchResultsPage'
import SchoolDetailPage from './pages/SchoolDetailPage'

const AdminPage = import.meta.env.DEV
  ? lazy(() => import('./pages/AdminPage'))
  : null

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <main className="app-shell-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nama" element={<AboutPage />} />
            <Route path="/politika-privatnosti" element={<PrivacyPolicyPage />} />
            <Route path="/pretraga" element={<SearchResultsPage />} />
            <Route path="/kategorija/:slug" element={<CategoryPage />} />
            <Route path="/skola/:slug" element={<SchoolDetailPage />} />
            {AdminPage ? (
              <Route
                path="/admin"
                element={
                  <Suspense fallback={null}>
                    <AdminPage />
                  </Suspense>
                }
              />
            ) : null}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
