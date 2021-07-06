import { Donation } from 'modules/donation'
import { CampaignLayout } from 'modules/shared/CampaignLayout'
import { PageProps } from 'campaings/ssr'
export { getStaticProps, getStaticPaths } from 'campaings/ssr'

const DonationPage = ({ campaignInfo }: PageProps) => {
  return (
    <CampaignLayout campaignInfo={campaignInfo}>
      <Donation />
    </CampaignLayout>
  )
}

export default DonationPage
