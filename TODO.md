# MVP follow-up roadmap

These requirements and useful extensions were intentionally deferred rather than removed.

## High priority

- Replace all DEMO literature with verified citations, summaries and links.
- Verify coordinates, water depths, holes, coverage, splices and age models against official ODP/IODP reports.
- Add automatic literature ↔ site cross-links using `site` names and `main_references` IDs.
- Add a JSON schema and CI validation for controlled vocabularies, duplicate IDs, DOI shape and dates.
- Add export of filtered results and comparison tables to CSV/Markdown.

## Knowledge synthesis

- Add saved reading lists and comparison sets (browser local storage, no backend).
- Add structured evidence strength, analytical uncertainty and age-model uncertainty fields.
- Add proxy/species matrices and timeline visualization.
- Add citation import from BibTeX, RIS or Zotero CSV with a local conversion script.
- Add full citation styles and one-click citation copying.

## Interface

- Add multi-select filters and active-filter chips.
- Add URL-persisted filters and compare selections.
- Add table column visibility and compact/detailed modes.
- Add pagination or virtualization if the database grows to thousands of records.
- Add bilingual UI labels and optional dark mode.

## Future architecture

- Add automated tests for filtering, routing and comparison limits.
- Consider static search indexing for a very large collection.
- Consider a private repository or local-only build if personal notes should not be public.
