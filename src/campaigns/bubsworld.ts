import { LocalCampaignInfo } from '../../types/CampaignInfo'
export const bubsworld: LocalCampaignInfo = {
  slug: 'bubsworld',
  everySlug: 'bubsworld',
  name: "Lil BUB's Better World Fundraiser",
  primaryColor: '#D55684',
  mobileBannerUrl: 'profile_pics/ipxxsfqxtt6skku7vh1z',
  imageUrl: 'profile_pics/ipxxsfqxtt6skku7vh1z',
  bannerUrl: 'profile_pics/ipxxsfqxtt6skku7vh1z',
  socialShareText:
    'Lil BUB’s Better World Fundraiser raises money for four organizations very close to BUB’s heart by investing in our planet, our children, our pets, and our future.',
  previewImage: 'profile_pics/ipxxsfqxtt6skku7vh1z',
  about:
    "Investing In Our Planet, Our Children, Our Pets, and Our Future: Lil BUB taught us that our differences are what make us who we are and that our planet needs love and attention as do the animals and pets that rely on it. We are launching this Givelist Campaign in her honor by raising funds for organizations doing the work that Lil BUB believes in: Sycamore Land Trust for land preservation, Power of Zero to help prevent bullying in schools, Milo's Sanctuary for the care of homeless pets with special needs, and our own Lil BUB's Big FUND, whose mission it is to bring these causes together.",
  cause: 'ANIMALS',
  fundingGoal: 25000,
  showGoalOnThankyouPage: true,
  sponsor: {
    ratio: '1-for-1',
    threshold: 100,
    upTo: 50000,
    description:
      'Amplify your gift! Generous donors will match you dollar-for-dollar up to $100 until we reach $50,000 total matched.'
  },
  nonprofits: [
    {
      slug: 'lilbubsbigfund',
      name: "Lil BUB's Big Fund",
      location: 'Bloomington, IN',
      about:
        'Lil BUB’s Big Fund exists to advocate for special needs companion animals and build a community that celebrates and fosters the human animal bond.',
      img: 'profile_pics/revm53vimmnuio5foiqi'
    },
    {
      slug: 'sycamorelandtrust',
      name: 'Sycamore Land Trust',
      location: 'Bloomington, IN',
      about:
        'Protecting land, restoring habitat, and connecting people to nature in southern Indiana since 1990.',
      img: 'faja_profile/b6uvukeur74wbygwy9kf'
    },
    {
      slug: 'powerof0',
      name: 'Power of Zero',
      location: 'San Francisco, CA',
      about:
        'Eradicating bullying and cyberbullying through the power of compassion.',
      img: 'profile_pics/v6pb1zgell2ptd3wlxgh'
    },
    {
      slug: 'milossanctuary',
      name: "Milo's Sanctuary",
      location: 'Burbank, DC',
      about:
        'To rescue special needs cats and kittens and rehome cats that can be adopted to forever homes and prompt early spaying & neutering of ALL animals.',
      img: 'faja_profile/gls4z7gt0v45833zd8v1'
    }
  ]
}
