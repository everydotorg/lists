import { CampaignLayout } from 'src/components/CampaignLayout'
import { ThankYou } from 'src/pages/ThankYou'
import { PageProps } from 'src/services/ssr'

export { getStaticPaths, getStaticProps } from 'src/services/ssr'

const ThankYouPage = ({ campaignInfo }: PageProps) => {
  return (
    <CampaignLayout campaignInfo={campaignInfo} showAbout={false} showDiscover>
      <ThankYou />
    </CampaignLayout>
  )
}

export default ThankYouPage
