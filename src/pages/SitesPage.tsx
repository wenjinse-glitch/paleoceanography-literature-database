import { useState } from 'react'
import { sites } from '../data'
import Badge from '../components/Badge'

export default function SitesPage() {
  const [query, setQuery] = useState('')
  const filtered = sites.filter((x) => [x.site, x.ocean, ...x.role_in_my_research, x.expedition].join(' ').toLowerCase().includes(query.toLowerCase()))
  return <div className="page-wrap page-content">
    <div className="page-title-row"><div><p className="eyebrow">CORE ARCHIVE</p><h1>ODP / IODP Sites</h1><p>Site metadata, stratigraphic frameworks and research roles.</p></div><div className="count-chip"><strong>{sites.length}</strong><span>sites tracked</span></div></div>
    <label className="search-label standalone"><span>Find a site</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Site, ocean, expedition or role…" /><i>⌕</i></label>
    <div className="site-grid">{filtered.map((item) => <article className="site-card" key={item.id}><div className="site-card-header"><div><p>{item.ocean}</p><h2>{item.site}</h2></div><Badge tone="demo">DEMO</Badge></div><dl><SiteField label="Coordinates" value={`${item.latitude}, ${item.longitude}`} /><SiteField label="Water depth" value={item.water_depth} /><SiteField label="Expedition" value={item.expedition} /><SiteField label="Hole" value={item.hole} /><SiteField label="Time coverage" value={item.time_coverage} /><SiteField label="Depth scale" value={item.depth_scale} /><SiteField label="Splice availability" value={item.splice_availability} /><SiteField label="Age model" value={item.age_model} /></dl><div className="role-block"><h3>Role in my research</h3><div className="badge-row">{item.role_in_my_research.map((x) => <Badge key={x}>{x}</Badge>)}</div></div><div className="site-notes"><strong>Main references</strong><p>{item.main_references.join(', ') || 'Not added yet'}</p><strong>Notes</strong><p>{item.notes}</p></div></article>)}</div>
  </div>
}
function SiteField({ label, value }: { label: string; value: string }) { return <div><dt>{label}</dt><dd>{value}</dd></div> }
