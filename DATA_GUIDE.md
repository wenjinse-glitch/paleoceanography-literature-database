# Data Guide

The site is data-driven. Add literature in `src/data/literature.json` and sites in `src/data/sites.json`; React pages should not contain citation records.

## Add a literature record

1. Open `src/data/literature.json`.
2. Copy one complete object, add a comma between records, and replace every value.
3. Give it a unique, URL-safe `id`, for example `higgins-2025-ica-pacific`.
4. Use JSON double quotes, keep arrays in square brackets, and do not leave a trailing comma after the final record.
5. Set `is_demo` to `false` for verified records.
6. Run `npm run build`; TypeScript catches missing or invalid fields.

Example:

```json
{
  "id": "surname-2025-short-topic",
  "title": "Verified article title",
  "authors": ["Family name, Given name", "Family name, Given name"],
  "year": 2025,
  "journal": "Journal name",
  "doi": "10.xxxx/verified-doi",
  "url": "https://publisher.example/article",
  "category": ["I/Ca application"],
  "keywords": ["I/Ca", "foraminifera", "Pacific"],
  "ocean": ["Pacific"],
  "region": "Eastern equatorial Pacific",
  "site": ["IODP U1338"],
  "time_interval": "Miocene",
  "proxy": ["Foraminiferal I/Ca"],
  "species": ["Species name"],
  "sample_type": "Planktonic foraminiferal calcite",
  "research_question": "What question does this paper test?",
  "methods": "Analytical methods and study design.",
  "main_findings": "Evidence and reported results.",
  "key_conclusions": "Authors' main interpretation.",
  "importance": "Essential",
  "limitations": "Caveats, uncertainty and missing controls.",
  "relation_to_my_research": ["I/Ca 校准", "太平洋站点对比"],
  "data_available": "Yes — repository name",
  "data_link": "https://repository.example/dataset",
  "age_model": "Age-model source, tie points and version",
  "depth_scale": "CCSF-A",
  "splice_information": "Splice table source/version",
  "figures_to_focus": "Figures 2, 4 and S3",
  "quotes_or_notes": "Your reading notes; use quotation marks and page numbers for direct quotes.",
  "read_status": "Finished",
  "date_added": "2026-09-14",
  "is_demo": false
}
```

## Field reference

| Field | Type | Meaning |
|---|---|---|
| `id` | string | Unique, stable, URL-safe identifier. Never reuse it. |
| `title` | string | Full article title. |
| `authors` | string[] | Ordered author names. |
| `year` | number | Four-digit publication year. |
| `journal` | string | Journal or report title. |
| `doi` | string | DOI without `https://doi.org/`; leave empty if none. |
| `url` | string | Stable publisher or repository URL. |
| `category` | string[] | One or more categories from the controlled list below. |
| `keywords` | string[] | Free-form searchable tags. |
| `ocean` | string[] | One or more controlled ocean values. |
| `region` | string | More specific study area. |
| `site` | string[] | ODP/IODP sites or other core locations. |
| `time_interval` | string | Study interval, e.g. `Middle Miocene–present`. |
| `proxy` | string[] | Proxies measured or synthesized. |
| `species` | string[] | Taxa analyzed; empty array if not applicable. |
| `sample_type` | string | Material analyzed. |
| `research_question` | string | Primary hypothesis or question. |
| `methods` | string | Sampling, analytical and statistical methods. |
| `main_findings` | string | Reported evidence/results, separated from interpretation. |
| `key_conclusions` | string | Authors' main interpretation. |
| `importance` | string | `Essential`, `Important`, `Background`, or `Optional`. |
| `limitations` | string | Your assessment of uncertainty and limitations. |
| `relation_to_my_research` | string[] | Concrete uses in your project; this is a primary synthesis field. |
| `data_available` | string | Availability and repository status. |
| `data_link` | string | Direct data URL, or empty string. |
| `age_model` | string | Model name/source, tie points, version and uncertainty. |
| `depth_scale` | string | mbsf, MCD, CCSF-A, etc. |
| `splice_information` | string | Splice source, status and caveats. |
| `figures_to_focus` | string | Important figures/tables and why they matter. |
| `quotes_or_notes` | string | Personal notes; record page numbers for direct quotes. |
| `read_status` | string | `Not read`, `Skimmed`, `Reading`, `Finished`, or `Deep read`. |
| `date_added` | string | ISO date: `YYYY-MM-DD`. |
| `is_demo` | boolean | `true` only for placeholder/demo content. |

Controlled categories: `I/Ca principle`, `I/Ca calibration`, `I/Ca application`, `Ocean oxygenation`, `ODZ / OMZ`, `Productivity`, `Organic carbon burial`, `Carbon cycle`, `Paleoceanography background`, `Age model`, `ODP/IODP site information`, `Methods`, `Review`.

Controlled oceans: `Pacific`, `Atlantic`, `Indian`, `Southern Ocean`, `Global`.

Suggested relation tags: `I/Ca 指标原理`, `I/Ca 校准`, `支持 I/Ca 与氧变化关系`, `海水总碘浓度影响`, `ODZ 演化背景`, `中新世氧变化`, `生产力变化`, `有机碳埋藏`, `碳循环`, `太平洋站点对比`, `大西洋/印度洋跨洋对比`, `年龄模型`, `splice`, `ODP/IODP 站点信息`, `实验方法`.

## Add a site

Copy an object in `src/data/sites.json`, assign a unique `id`, and populate every field. `main_references` should contain literature IDs from `literature.json`, allowing a future release to create automatic cross-links. Keep `is_demo: true` until official expedition reports have verified the metadata.

