import { Link } from 'react-router-dom'
export default function NotFound() { return <div className="page-wrap not-found"><p className="eyebrow">404</p><h1>Page not found</h1><p>The requested page does not exist in this database.</p><Link className="button primary" to="/">Return home</Link></div> }
