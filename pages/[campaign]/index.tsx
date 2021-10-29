import { useRouter } from 'next/router'
import { CampaignLayout } from 'src/components/CampaignLayout'
import { Campaign } from 'src/pages/Campaign'
import { PageProps } from 'src/services/ssr'

export { getStaticPaths, getStaticProps } from 'src/services/ssr'

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
