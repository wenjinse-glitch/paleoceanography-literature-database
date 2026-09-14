# Paleoceanography Literature Database

A maintainable, searchable personal research knowledge base for foraminiferal I/Ca, ocean oxygenation, ODZ/OMZ evolution, Pacific oxygen change since the Miocene, productivity, organic-carbon burial, the carbon cycle, ODP/IODP sites and age models.

The MVP is entirely static: no backend, database, account, paid service or external data dependency. Literature and site records live in version-controlled JSON.

> All bundled literature records and unverified site metadata are clearly marked **DEMO**. They are interface fixtures, not citable scientific information.

## Features

- Dashboard counts by major research theme and shows recently added literature
- Full-text search across title, author, keywords, site, proxy and notes
- Filters for category, ocean, time interval, proxy, site, year, read status and importance
- Sort by date added, publication year, title or importance
- Detailed reading notes with prominent “Relation to my research” sections
- ODP/IODP site cards with stratigraphic, age-model and research-role fields
- Side-by-side comparison of 2–5 papers
- Responsive academic-style interface
- JSON-only maintenance with no component-level citation data
- GitHub Actions deployment to GitHub Pages
- Hash-based routing so refreshing a detail page does not produce a Pages 404

## Tech stack

React, Vite, TypeScript, React Router, CSS, GitHub Actions and GitHub Pages.

## Local development

Requires Node.js 20 or newer (Node 22 LTS recommended).

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, normally `http://localhost:5173`.

Production verification:

```bash
npm run build
npm run preview
```

The static production output is generated in `dist/`.

## Maintaining data

- Add or edit literature in `src/data/literature.json`.
- Add or edit sites in `src/data/sites.json`.
- Do not hard-code records in React components.
- Read [DATA_GUIDE.md](DATA_GUIDE.md) for every field, controlled values and a complete example.

Once a JSON record is saved, dashboard counts, search, filter options, details and comparison views update automatically.

## GitHub Pages deployment

1. Create a GitHub repository and push this project to its `main` branch.
2. In **Settings → Pages**, choose **GitHub Actions** as the source if GitHub has not selected it automatically.
3. Push to `main`, or run **Deploy to GitHub Pages** manually from the Actions tab.
4. The workflow installs dependencies, builds `dist/`, uploads the artifact and deploys it. Commit a generated `package-lock.json` after the first local `npm install` for reproducible installs.

The app uses Vite `base: './'` and `HashRouter`; it works both at a repository path such as `https://USER.github.io/REPOSITORY/` and at a custom/root domain without route-refresh 404s.

## Project structure

```text
.
├── .github/workflows/deploy.yml  # Pages build/deploy workflow
├── src/
│   ├── components/               # Shared layout and UI primitives
│   ├── data/
│   │   ├── literature.json       # Literature database
│   │   └── sites.json            # ODP/IODP site database
│   ├── pages/                    # Home, literature, detail, sites, compare
│   ├── App.tsx                   # Routes
│   ├── data.ts                   # Typed data exports and controlled lists
│   ├── main.tsx                  # React entry point / HashRouter
│   ├── styles.css                # Responsive visual system
│   └── types.ts                  # Data interfaces
├── DATA_GUIDE.md                 # Data maintenance reference
├── TODO.md                       # Deliberately deferred enhancements
├── package.json
└── vite.config.ts
```

## Data quality workflow

When replacing demos, verify bibliographic metadata against the publisher or Crossref, scientific summaries against the full text, and site metadata against official ODP/IODP expedition reports. Keep evidence/results (`main_findings`) separate from interpretation (`key_conclusions`), and document age-model versions and depth scales explicitly.

## License and data privacy

Choose a repository license before public reuse. GitHub Pages is public by default: do not store copyrighted PDFs, confidential notes, credentials or private data in this repository.
