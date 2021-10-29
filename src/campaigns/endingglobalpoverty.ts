import { LocalCampaignInfo } from '../../types/CampaignInfo'
export const poverty: LocalCampaignInfo = {
  showOnHomepage: true,
  slug: 'poverty',
  everySlug: 'global.poverty',
  name: 'Ending Global Poverty',
  primaryColor: '#00A37F',
  imageUrl: 'profile_pics/tt8w3ikpmtiau7xv5ije',
  mobileBannerUrl: 'profile_pics/tt8w3ikpmtiau7xv5ije',
  bannerUrl: 'profile_pics/tt8w3ikpmtiau7xv5ije',
  socialShareText:
    'Help the four nonprofits on this Givelist address the challenges of global poverty. Backed by $10,000 of matched funding, your donation is amplified and directed to those most in need.',
  previewImage: 'profile_pics/tt8w3ikpmtiau7xv5ije',
  about:
    'Help the four nonprofits on this Givelist address the challenges of global poverty. Backed by $10,000 of matched funding, your donation is amplified and directed to those most in need.',
  cause: 'HUMAN_SERVICES',
  fundingGoal: 50000,
  sponsor: {
    ratio: '1-for-1',
    threshold: 20,
    upTo: 10000,
    description:
      'Amplify your gift! Generous donors will match you dollar-for-dollar up to $20 each time until we reach $10,000 total matched.'
  },
  nonprofits: [
    {
      slug: 'newincentives',
      name: 'New Incentives',
      location: 'Walnut, CA',
      about: 'We use cash transfers to increase immunization rates in Nigeria.',
      img: 'profile_pics/newnvy0rlvxdz3yx300o'
    },
    {
      slug: 'givedirectly',
      name: 'Give Directly',
      location: 'New York, NY',
      about:
        "Delivering unconditional cash directly to the world's poorest households via secure mobile transfers.",
      img: 'faja_profile/rdbzfnryksvqzdjeqtka'
    },
    {
      slug: 'strongminds',
      name: 'Strong Minds',
      location: 'Maplewood, NJ',
      about:
        'Provides life-changing mental health services to low-income Africans using an innovative community-based approach.',
      img: 'faja_profile/ilcto5hg7fmz5rv9bwq9'
    },
    {
      slug: 'lifeyoucansave',
      name: 'The Life You Can Save',
      location: 'Bainbridge is, WA',
      about:
        'We inspire effective giving in the fight against extreme poverty.',
      img: 'faja_profile/diucwv9fg2rxaqv8nquc'
    }
  ]
}
