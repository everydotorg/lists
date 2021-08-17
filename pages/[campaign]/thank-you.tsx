import { ThankYou } from 'src/pages/ThankYou'
import { CampaignLayout } from 'src/components/CampaignLayout'
import { PageProps } from 'src/campaigns/ssr'

export { getStaticProps, getStaticPaths } from 'src/campaigns/ssr'

const ThankYouPage = ({ campaignInfo }: PageProps) => {
  return (
    <CampaignLayout campaignInfo={campaignInfo} showAbout={false} showDiscover>
      <ThankYou />
    </CampaignLayout>
  )
}

export default ThankYouPage
