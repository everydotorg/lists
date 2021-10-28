import { CampaignInfo } from 'types/CampaignInfo'
import { science } from './a-brighter-future'
import { afghanistan } from './afghanistan-humanitarian-aid'
import { animals } from './animal.welfare'
import { antiracism } from './antiracism'
import { bubsworld } from './bubsworld'
import { charitysufferfest2021 } from './charitysufferfest2021'
import { desmondisamazing } from './desmondisamazing'
import { education } from './educationeverywhere'
import { health } from './effectivehealthcareeverywhere'
import { poverty } from './endingglobalpoverty'
import { fff } from './fff'
import { gerc } from './gerc'
import { juzzy } from './juzzy'
import { lgbtq } from './lgbtq'
import { lilbub } from './lilbub'
import { mads } from './mads'
import { climate } from './tacklingclimatechange'

export const campaigns: Record<string, CampaignInfo> = {
  animals,
  education,
  charitysufferfest2021,
  antiracism,
  lgbtq,
  health,
  poverty,
  climate,
  science,
  mads,
  juzzy,
  desmondisamazing,
  fff,
  bubsworld,
  lilbub,
  afghanistan,
  gerc
}
