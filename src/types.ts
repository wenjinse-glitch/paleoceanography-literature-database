export type Importance = 'Essential' | 'Important' | 'Background' | 'Optional'
export type ReadStatus = 'Not read' | 'Skimmed' | 'Reading' | 'Finished' | 'Deep read'

export interface Literature {
  id: string
  title: string
  authors: string[]
  year: number
  journal: string
  doi: string
  url: string
  category: string[]
  keywords: string[]
  ocean: string[]
  region: string
  site: string[]
  time_interval: string
  proxy: string[]
  species: string[]
  sample_type: string
  research_question: string
  methods: string
  main_findings: string
  key_conclusions: string
  importance: Importance
  limitations: string
  relation_to_my_research: string[]
  data_available: string
  data_link: string
  age_model: string
  depth_scale: string
  splice_information: string
  figures_to_focus: string
  quotes_or_notes: string
  read_status: ReadStatus
  date_added: string
  is_demo: boolean
}

export interface Site {
  id: string
  site: string
  ocean: string
  latitude: string
  longitude: string
  water_depth: string
  expedition: string
  hole: string
  time_coverage: string
  depth_scale: string
  splice_availability: string
  age_model: string
  main_references: string[]
  role_in_my_research: string[]
  notes: string
  is_demo: boolean
}
