import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import LiteraturePage from './pages/LiteraturePage'
import LiteratureDetail from './pages/LiteratureDetail'
import SitesPage from './pages/SitesPage'
import ComparePage from './pages/ComparePage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="literature" element={<LiteraturePage />} />
        <Route path="literature/:id" element={<LiteratureDetail />} />
        <Route path="sites" element={<SitesPage />} />
        <Route path="compare" element={<ComparePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
