import { Donation } from 'src/pages/Donation'
import { CampaignLayout } from 'src/components/CampaignLayout'
import { PageProps } from 'src/campaings/ssr'

export { getStaticProps, getStaticPaths } from 'src/campaings/ssr'

const DonationPage = ({ campaignInfo }: PageProps) => {
  return (
    <CampaignLayout campaignInfo={campaignInfo}>
      <Donation />
    </CampaignLayout>
  )
}

export default DonationPage
