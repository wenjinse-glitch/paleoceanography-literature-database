import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { categoryOptions, importanceOptions, literature, oceanOptions, readStatusOptions } from '../data'
import Badge from '../components/Badge'
import EmptyState from '../components/EmptyState'
import type { Literature } from '../types'

type SortKey = 'date_added' | 'year' | 'title' | 'importance'
const importanceRank: Record<string, number> = { Essential: 4, Important: 3, Background: 2, Optional: 1 }

const unique = (values: string[]) => [...new Set(values.filter(Boolean))].sort()

export default function LiteraturePage() {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({ category: '', ocean: '', time: '', proxy: '', site: '', year: '', status: '', importance: '' })
  const [sort, setSort] = useState<SortKey>('date_added')

  const setFilter = (key: keyof typeof filters, value: string) => setFilters((old) => ({ ...old, [key]: value }))
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const items = literature.filter((item) => {
      const haystack = [item.title, ...item.authors, ...item.keywords, ...item.site, ...item.proxy, item.quotes_or_notes].join(' ').toLowerCase()
      return (!q || haystack.includes(q)) &&
        (!filters.category || item.category.includes(filters.category)) &&
        (!filters.ocean || item.ocean.includes(filters.ocean)) &&
        (!filters.time || item.time_interval === filters.time) &&
        (!filters.proxy || item.proxy.includes(filters.proxy)) &&
        (!filters.site || item.site.includes(filters.site)) &&
        (!filters.year || String(item.year) === filters.year) &&
        (!filters.status || item.read_status === filters.status) &&
        (!filters.importance || item.importance === filters.importance)
    })
    return [...items].sort((a, b) => {
      if (sort === 'date_added') return b.date_added.localeCompare(a.date_added)
      if (sort === 'year') return b.year - a.year
      if (sort === 'importance') return importanceRank[b.importance] - importanceRank[a.importance]
      return a.title.localeCompare(b.title)
    })
  }, [query, filters, sort])

  const selectData = {
    time: unique(literature.map((x) => x.time_interval)), proxy: unique(literature.flatMap((x) => x.proxy)),
    site: unique(literature.flatMap((x) => x.site)), year: unique(literature.map((x) => String(x.year))).reverse(),
  }
  const clear = () => { setQuery(''); setFilters({ category: '', ocean: '', time: '', proxy: '', site: '', year: '', status: '', importance: '' }) }

  return (
    <div className="page-wrap page-content">
      <div className="page-title-row"><div><p className="eyebrow">RESEARCH LIBRARY</p><h1>Literature</h1><p>Search, filter and sort the full collection.</p></div><div className="count-chip"><strong>{filtered.length}</strong><span>of {literature.length} papers</span></div></div>
      <section className="filter-panel" aria-label="Literature filters">
        <label className="search-label"><span>Search literature</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Title, author, keyword, site, proxy or notes…" /><i>⌕</i></label>
        <div className="filter-grid">
          <Filter label="Category" value={filters.category} options={categoryOptions} onChange={(v) => setFilter('category', v)} />
          <Filter label="Ocean" value={filters.ocean} options={oceanOptions} onChange={(v) => setFilter('ocean', v)} />
          <Filter label="Time interval" value={filters.time} options={selectData.time} onChange={(v) => setFilter('time', v)} />
          <Filter label="Proxy" value={filters.proxy} options={selectData.proxy} onChange={(v) => setFilter('proxy', v)} />
          <Filter label="Site" value={filters.site} options={selectData.site} onChange={(v) => setFilter('site', v)} />
          <Filter label="Publication year" value={filters.year} options={selectData.year} onChange={(v) => setFilter('year', v)} />
          <Filter label="Read status" value={filters.status} options={readStatusOptions} onChange={(v) => setFilter('status', v)} />
          <Filter label="Importance" value={filters.importance} options={importanceOptions} onChange={(v) => setFilter('importance', v)} />
        </div>
        <div className="filter-actions"><button className="link-button" onClick={clear}>Clear all filters</button><label>Sort by <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}><option value="date_added">Recently added</option><option value="year">Publication year</option><option value="title">Title</option><option value="importance">Importance</option></select></label></div>
      </section>
      {filtered.length ? <div className="table-scroll"><table className="literature-table"><thead><tr><th>Paper</th><th>Year</th><th>Category</th><th>Study context</th><th>Status</th><th>Importance</th></tr></thead><tbody>{filtered.map((item) => <LiteratureRow item={item} key={item.id} />)}</tbody></table></div> : <EmptyState title="No papers found" detail="Try a broader search or clear one of the filters." />}
    </div>
  )
}

function Filter({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return <label><span>{label}</span><select value={value} onChange={(e) => onChange(e.target.value)}><option value="">All</option>{options.map((option) => <option key={option}>{option}</option>)}</select></label>
}

function LiteratureRow({ item }: { item: Literature }) {
  return <tr><td className="paper-cell"><Link to={`/literature/${item.id}`}>{item.title}</Link><small>{item.authors.join(', ')} · {item.journal}</small><div className="tags-mini">{item.keywords.slice(0, 3).map((x) => <span key={x}>#{x}</span>)}</div></td><td>{item.year}</td><td><div className="badge-stack">{item.category.slice(0, 2).map((x) => <Badge key={x}>{x}</Badge>)}</div></td><td><strong>{item.ocean.join(', ')}</strong><small>{item.site.join(', ') || item.region}</small><small>{item.time_interval}</small></td><td><Badge tone="status">{item.read_status}</Badge></td><td><Badge tone={item.importance.toLowerCase()}>{item.importance}</Badge></td></tr>
}
