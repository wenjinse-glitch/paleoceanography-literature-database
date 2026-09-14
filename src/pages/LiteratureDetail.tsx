import { Link, useParams } from 'react-router-dom'
import { literature } from '../data'
import Badge from '../components/Badge'
import NotFound from './NotFound'

export default function LiteratureDetail() {
  const { id } = useParams()
  const item = literature.find((x) => x.id === id)
  if (!item) return <NotFound />
  const citation = `${item.authors.join(', ')} (${item.year}). ${item.title}. ${item.journal}.`
  return <div className="page-wrap detail-page">
    <Link to="/literature" className="back-link">← Back to literature</Link>
    <header className="detail-header"><div className="badge-row"><Badge tone="demo">DEMO</Badge>{item.category.map((x) => <Badge key={x}>{x}</Badge>)}</div><h1>{item.title}</h1><p>{item.authors.join(', ')} · {item.year} · <em>{item.journal}</em></p><div className="detail-actions">{item.doi && <a className="button primary" href={`https://doi.org/${item.doi}`} target="_blank" rel="noreferrer">Open DOI ↗</a>}{item.url && <a className="button secondary" href={item.url} target="_blank" rel="noreferrer">Original article ↗</a>}</div></header>
    <div className="detail-layout"><article className="detail-main"><Detail title="Citation" value={citation} /><Detail title="Research question" value={item.research_question} /><Detail title="Methods" value={item.methods} /><Detail title="Main findings" value={item.main_findings} /><Detail title="Key conclusions" value={item.key_conclusions} accent /><Detail title="Limitations" value={item.limitations} /><Detail title="Relation to my research" list={item.relation_to_my_research} accent /><Detail title="Important figures" value={item.figures_to_focus} /><Detail title="Age model" value={item.age_model} /><Detail title="Data availability" value={`${item.data_available}${item.data_link ? ` — ${item.data_link}` : ''}`} /><Detail title="My notes" value={item.quotes_or_notes} /></article>
      <aside className="metadata-card"><h2>Study metadata</h2><Meta label="Sites" value={item.site.join(', ') || '—'} /><Meta label="Ocean / region" value={`${item.ocean.join(', ')} · ${item.region}`} /><Meta label="Time interval" value={item.time_interval} /><Meta label="Proxy" value={item.proxy.join(', ') || '—'} /><Meta label="Species" value={item.species.join(', ') || '—'} /><Meta label="Sample type" value={item.sample_type} /><Meta label="Depth scale" value={item.depth_scale} /><Meta label="Splice" value={item.splice_information} /><Meta label="Read status" value={item.read_status} /><Meta label="Importance" value={item.importance} /><Meta label="Added" value={item.date_added} /><div className="keyword-cloud">{item.keywords.map((x) => <span key={x}>#{x}</span>)}</div></aside>
    </div>
  </div>
}

function Detail({ title, value, list, accent = false }: { title: string; value?: string; list?: string[]; accent?: boolean }) { return <section className={`detail-section ${accent ? 'detail-accent' : ''}`}><h2>{title}</h2>{list ? <ul>{list.map((x) => <li key={x}>{x}</li>)}</ul> : <p>{value || '—'}</p>}</section> }
function Meta({ label, value }: { label: string; value: string }) { return <div className="meta-row"><span>{label}</span><strong>{value}</strong></div> }
