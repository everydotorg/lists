// All data from bubsworld list on Every.org escept name and non-profit locations

import { LocalCampaignInfo } from '../../../types/CampaignInfo'
export const bubsworldPartial: LocalCampaignInfo = {
  slug: 'bubsworldPartial',
  everySlug: 'bubsworld',
  name: 'Better Name',
  nonprofits: [
    {
      slug: 'lilbubsbigfund',
      location: 'Bloomington, IN'
    },
    {
      slug: 'sycamorelandtrust',
      location: 'Bloomington, IN'
    },
    {
      slug: 'powerof0',
      location: 'San Francisco, CA'
    }
    // milossanctuary location not overriden
  ]
}
