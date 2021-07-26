import { Campaign } from 'src/pages/Campaign'
import { CampaignLayout } from 'src/components/CampaignLayout'
import { PageProps } from 'src/campaings/ssr'
import { useRouter } from 'next/router'

export { getStaticProps, getStaticPaths } from 'src/campaings/ssr'

const CampaignPage = ({ campaignInfo }: PageProps) => {
  const router = useRouter()
  const { showBackToExamples } = router.query
  return (
    <CampaignLayout
      campaignInfo={campaignInfo}
      showBackExamples={Boolean(showBackToExamples)}
    >
      <Campaign />
    </CampaignLayout>
  )
}

export default CampaignPage
