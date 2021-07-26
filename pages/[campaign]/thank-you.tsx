import { ThankYou } from 'src/pages/ThankYou'
import { CampaignLayout } from 'src/components/CampaignLayout'
import { PageProps } from 'src/campaings/ssr'

export { getStaticProps, getStaticPaths } from 'src/campaings/ssr'

const ThankYouPage = ({ campaignInfo }: PageProps) => {
  return (
    <CampaignLayout campaignInfo={campaignInfo} showAbout={false} showDiscover>
      <ThankYou />
    </CampaignLayout>
  )
}

export default ThankYouPage
