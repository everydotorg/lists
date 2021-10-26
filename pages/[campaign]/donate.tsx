import { CampaignLayout } from 'src/components/CampaignLayout'
import { Donation } from 'src/pages/Donation'
import { PageProps } from 'src/services/ssr'

export { getStaticPaths, getStaticProps } from 'src/services/ssr'

const DonationPage = ({ campaignInfo }: PageProps) => {
  return (
    <CampaignLayout campaignInfo={campaignInfo}>
      <Donation />
    </CampaignLayout>
  )
}

export default DonationPage
