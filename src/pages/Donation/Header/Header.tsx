import { Flex, Box } from '@theme-ui/components'
import { Text } from 'theme-ui'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { gtag } from 'src/services/gtag'
import { Icon } from 'src/components/Icon'
import { styles } from './headerStyles'
import { useRouter } from 'next/router'

export const Header = (): JSX.Element => {
  const { name, slug } = useCampaignInfoContext()
  const router = useRouter()

  const closeDonatePage = () => {
    gtag.pushEvent(`donate_close`, {})
    const { showBackToList } = router.query
    router.push(
      {
        pathname: '/[campaign]',
        query: {
          campaign: slug,
          showBackToList
        }
      },
      `/${slug}`
    )
  }

  return (
    <Flex sx={styles.headerContainer}>
      <Flex sx={styles.firstLine}>
        <Text variant="title" sx={styles.header}>
          Donate to:
        </Text>
        <Text variant="title">{name}</Text>
      </Flex>
      <Box id="close-donation" sx={styles.closeBox} onClick={closeDonatePage}>
        <Icon.Close />
      </Box>
    </Flex>
  )
}
