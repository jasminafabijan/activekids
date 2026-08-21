import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ScrollToTop from './components/ScrollToTop'
import DocumentLang from './i18n/DocumentLang'
import { CATEGORY_ROUTE_PATH, PAGE_PATHS, SCHOOL_ROUTE_PATH } from './i18n/routes'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const SearchResultsPage = lazy(() => import('./pages/SearchResultsPage'))
const MapPage = lazy(() => import('./pages/MapPage'))
const CategoryPage = lazy(() => import('./pages/CategoryPage'))
const SchoolDetailPage = lazy(() => import('./pages/SchoolDetailPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const AdminPage = import.meta.env.DEV
  ? lazy(() => import('./pages/AdminPage'))
  : null

const pageFallback = <div className="page-shell page-shell--fill" />

function App() {
  return (
    <BrowserRouter>
      <DocumentLang />
      <ScrollToTop />
      <div className="app-shell">
        <main className="app-shell-main">
          <Suspense fallback={pageFallback}>
            <Routes>
              <Route path={PAGE_PATHS.home.sr} element={<HomePage />} />
              <Route path={PAGE_PATHS.home.en} element={<HomePage />} />
              <Route path={PAGE_PATHS.about.sr} element={<AboutPage />} />
              <Route path={PAGE_PATHS.about.en} element={<AboutPage />} />
              <Route path={PAGE_PATHS.privacy.sr} element={<PrivacyPolicyPage />} />
              <Route path={PAGE_PATHS.privacy.en} element={<PrivacyPolicyPage />} />
              <Route path={PAGE_PATHS.search.sr} element={<SearchResultsPage />} />
              <Route path={PAGE_PATHS.search.en} element={<SearchResultsPage />} />
              <Route path={PAGE_PATHS.map.sr} element={<MapPage />} />
              <Route path={PAGE_PATHS.map.en} element={<MapPage />} />
              <Route path={CATEGORY_ROUTE_PATH.sr} element={<CategoryPage />} />
              <Route path={CATEGORY_ROUTE_PATH.en} element={<CategoryPage />} />
              <Route path={SCHOOL_ROUTE_PATH.sr} element={<SchoolDetailPage />} />
              <Route path={SCHOOL_ROUTE_PATH.en} element={<SchoolDetailPage />} />
              {AdminPage ? <Route path="/admin" element={<AdminPage />} /> : null}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
