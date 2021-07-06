import { Campaign } from 'modules/campaign'
import { CampaignLayout } from 'modules/shared/CampaignLayout'
import { PageProps } from 'campaings/ssr'

export { getStaticProps, getStaticPaths } from 'campaings/ssr'

const CampaignPage = ({ campaignInfo }: PageProps) => {
  return (
    <CampaignLayout campaignInfo={campaignInfo}>
      <Campaign />
    </CampaignLayout>
  )
}

export default CampaignPage
