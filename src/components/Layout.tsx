import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink to="/" className="brand" aria-label="Home">
          <span className="brand-mark">P</span>
          <span>Paleoceanography DB</span>
        </NavLink>
        <nav aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/literature">Literature</NavLink>
          <NavLink to="/sites">Sites</NavLink>
          <NavLink to="/compare">Compare</NavLink>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer>
        <span>Personal research knowledge base</span>
        <span>Data maintained in JSON · No backend</span>
      </footer>
    </div>
  )
}
