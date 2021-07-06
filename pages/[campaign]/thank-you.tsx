import { ThankYou } from 'modules/thank-you'
import { CampaignLayout } from 'modules/shared/CampaignLayout'
import { PageProps } from 'campaings/ssr'

export { getStaticProps, getStaticPaths } from 'campaings/ssr'

const ThankYouPage = ({ campaignInfo }: PageProps) => {
  return (
    <CampaignLayout campaignInfo={campaignInfo} hideBannerButtons>
      <ThankYou />
    </CampaignLayout>
  )
}

export default ThankYouPage
