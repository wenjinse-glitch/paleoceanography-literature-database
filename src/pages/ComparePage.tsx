import { useState } from 'react'
import { Link } from 'react-router-dom'
import { literature } from '../data'
import type { Literature } from '../types'

const fields: { label: string; value: (x: Literature) => string }[] = [
  { label: 'Year', value: (x) => String(x.year) }, { label: 'Time interval', value: (x) => x.time_interval },
  { label: 'Study area', value: (x) => `${x.ocean.join(', ')} — ${x.region}` }, { label: 'Sites', value: (x) => x.site.join(', ') || '—' },
  { label: 'Proxy', value: (x) => x.proxy.join(', ') || '—' }, { label: 'Species', value: (x) => x.species.join(', ') || '—' },
  { label: 'Age model', value: (x) => x.age_model }, { label: 'Main conclusion', value: (x) => x.key_conclusions },
  { label: 'Advantages', value: (x) => x.main_findings }, { label: 'Limitations', value: (x) => x.limitations },
  { label: 'Relation to my research', value: (x) => x.relation_to_my_research.join('; ') },
]

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([])
  const papers = selected.map((id) => literature.find((x) => x.id === id)!).filter(Boolean)
  const toggle = (id: string) => setSelected((old) => old.includes(id) ? old.filter((x) => x !== id) : old.length < 5 ? [...old, id] : old)
  return <div className="page-wrap page-content compare-page">
    <div className="page-title-row"><div><p className="eyebrow">SYNTHESIS WORKSPACE</p><h1>Compare papers</h1><p>Select 2–5 papers to compare study design and relevance side by side.</p></div><div className="count-chip"><strong>{selected.length}</strong><span>selected</span></div></div>
    <section className="compare-picker"><h2>Choose literature</h2><div className="picker-list">{literature.map((item) => <label className={selected.includes(item.id) ? 'picked' : ''} key={item.id}><input type="checkbox" checked={selected.includes(item.id)} disabled={!selected.includes(item.id) && selected.length >= 5} onChange={() => toggle(item.id)} /><span><strong>{item.title}</strong><small>{item.year} · {item.proxy.join(', ')}</small></span></label>)}</div><p>{selected.length < 2 ? `Select ${2 - selected.length} more paper${selected.length === 1 ? '' : 's'} to compare.` : 'Ready to compare.'} Maximum 5.</p></section>
    {papers.length >= 2 && <div className="compare-scroll"><table className="compare-table"><thead><tr><th>Field</th>{papers.map((paper) => <th key={paper.id}><Link to={`/literature/${paper.id}`}>{paper.title}</Link></th>)}</tr></thead><tbody>{fields.map((field) => <tr key={field.label}><th>{field.label}</th>{papers.map((paper) => <td key={paper.id}>{field.value(paper)}</td>)}</tr>)}</tbody></table></div>}
  </div>
}
