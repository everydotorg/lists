import { useRouter } from 'next/router'
import { PageProps } from 'src/campaigns/ssr'
import { CampaignLayout } from 'src/components/CampaignLayout'
import { Campaign } from 'src/pages/Campaign'

export { getStaticPaths, getStaticProps } from 'src/campaigns/ssr'

const CampaignPage = ({ campaignInfo }: PageProps) => {
  const router = useRouter()
  const { showBackToList } = router.query
  return (
    <CampaignLayout
      campaignInfo={campaignInfo}
      showBackList={Boolean(showBackToList)}
    >
      <Campaign />
    </CampaignLayout>
  )
}

export default CampaignPage
