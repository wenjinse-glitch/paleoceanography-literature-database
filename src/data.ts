import rawLiterature from './data/literature.json'
import rawSites from './data/sites.json'
import type { Literature, Site } from './types'

export const literature = rawLiterature as Literature[]
export const sites = rawSites as Site[]

export const categoryOptions = [
  'I/Ca principle', 'I/Ca calibration', 'I/Ca application', 'Ocean oxygenation',
  'ODZ / OMZ', 'Productivity', 'Organic carbon burial', 'Carbon cycle',
  'Paleoceanography background', 'Age model', 'ODP/IODP site information',
  'Methods', 'Review',
]

export const oceanOptions = ['Pacific', 'Atlantic', 'Indian', 'Southern Ocean', 'Global']
export const readStatusOptions = ['Not read', 'Skimmed', 'Reading', 'Finished', 'Deep read']
export const importanceOptions = ['Essential', 'Important', 'Background', 'Optional']
