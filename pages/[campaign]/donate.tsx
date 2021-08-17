import { Donation } from 'src/pages/Donation'
import { CampaignLayout } from 'src/components/CampaignLayout'
import { PageProps } from 'src/campaigns/ssr'

export { getStaticProps, getStaticPaths } from 'src/campaigns/ssr'

const DonationPage = ({ campaignInfo }: PageProps) => {
  return (
    <CampaignLayout campaignInfo={campaignInfo}>
      <Donation />
    </CampaignLayout>
  )
}

export default DonationPage
