import { Link } from 'react-router-dom'
import { literature } from '../data'
import Badge from '../components/Badge'

const groups = [
  { label: 'I/Ca', test: (cats: string[]) => cats.some((c) => c.startsWith('I/Ca')) },
  { label: 'ODZ / oxygenation', test: (cats: string[]) => cats.some((c) => ['ODZ / OMZ', 'Ocean oxygenation'].includes(c)) },
  { label: 'Productivity', test: (cats: string[]) => cats.includes('Productivity') },
  { label: 'Carbon cycle / burial', test: (cats: string[]) => cats.some((c) => ['Carbon cycle', 'Organic carbon burial'].includes(c)) },
  { label: 'Age model / sites', test: (cats: string[]) => cats.some((c) => ['Age model', 'ODP/IODP site information'].includes(c)) },
]

export default function Home() {
  const recent = [...literature].sort((a, b) => b.date_added.localeCompare(a.date_added)).slice(0, 4)
  return (
    <>
      <section className="hero page-wrap">
        <p className="eyebrow">PERSONAL RESEARCH KNOWLEDGE BASE</p>
        <h1>Paleoceanography<br />Literature Database</h1>
        <p className="hero-copy">Literature database for foraminiferal I/Ca, ocean oxygenation, ODZ evolution, carbon cycle and paleoceanography</p>
        <div className="hero-actions">
          <Link className="button primary" to="/literature">Browse literature <span>→</span></Link>
          <Link className="button secondary" to="/compare">Compare papers</Link>
        </div>
      </section>

      <section className="page-wrap stats-section" aria-labelledby="overview-title">
        <div className="section-heading"><div><p className="eyebrow">COLLECTION OVERVIEW</p><h2 id="overview-title">At a glance</h2></div><p>Counts update automatically from <code>literature.json</code>.</p></div>
        <div className="stats-grid">
          <article className="stat-card stat-total"><strong>{literature.length}</strong><span>Total papers</span></article>
          {groups.map((group) => <article className="stat-card" key={group.label}><strong>{literature.filter((item) => group.test(item.category)).length}</strong><span>{group.label}</span></article>)}
        </div>
      </section>

      <section className="page-wrap recent-section" aria-labelledby="recent-title">
        <div className="section-heading"><div><p className="eyebrow">LATEST ENTRIES</p><h2 id="recent-title">Recently added</h2></div><Link to="/literature" className="text-link">View all literature →</Link></div>
        <div className="recent-list">
          {recent.map((item) => (
            <Link to={`/literature/${item.id}`} className="recent-item" key={item.id}>
              <div className="date-block"><strong>{new Date(`${item.date_added}T00:00:00`).toLocaleDateString('en', { day: '2-digit' })}</strong><span>{new Date(`${item.date_added}T00:00:00`).toLocaleDateString('en', { month: 'short' })}</span></div>
              <div className="recent-main"><div className="badge-row"><Badge tone="demo">DEMO</Badge>{item.category.slice(0, 2).map((c) => <Badge key={c}>{c}</Badge>)}</div><h3>{item.title}</h3><p>{item.authors.join(', ')} · {item.year} · {item.journal}</p></div>
              <span className="arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
