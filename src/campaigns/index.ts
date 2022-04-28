import { LocalCampaignInfo } from 'types/CampaignInfo'
import { science } from './a-brighter-future'
import { afghanistan } from './afghanistan-humanitarian-aid'
import { animals } from './animal.welfare'
import { antiracism } from './antiracism'
import { bubsworld } from './bubsworld'
import { charitysufferfest2021 } from './charitysufferfest2021'
import { demoCampaigns } from './demos'
import { desmondisamazing } from './desmondisamazing'
import { education } from './educationeverywhere'
import { health } from './effectivehealthcareeverywhere'
import { poverty } from './endingglobalpoverty'
import { fff } from './fff'
import { gerc } from './gerc'
import { juzzy } from './juzzy'
import { lgbtq } from './lgbtq'
import { lilbub } from './lilbub'
import { puppylove } from './puppylove'
import { nativeamerican } from './nativeamerican'
import { mads } from './mads'
import { brenda } from './brendas-list'
import { climate } from './tacklingclimatechange'
import { veteranssof } from './veteranssof'
import { mauleBerg } from './maule-berg'

export const campaigns: Record<string, LocalCampaignInfo> = {
  ...demoCampaigns,
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
  brenda,
  lilbub,
  puppylove,
  nativeamerican,
  afghanistan,
  gerc,
  veteranssof,
  mauleBerg
}
