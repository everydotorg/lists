import { Campaign } from 'src/pages/Campaign'
import { CampaignLayout } from 'src/components/CampaignLayout'
import { PageProps } from 'src/campaings/ssr'

export { getStaticProps, getStaticPaths } from 'src/campaings/ssr'

const CampaignPage = ({ campaignInfo }: PageProps) => {
  return (
    <CampaignLayout campaignInfo={campaignInfo}>
      <Campaign />
    </CampaignLayout>
  )
}

export default CampaignPage
