import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { gtag } from 'src/services/gtag'
import { createEveryUrl } from 'src/services/url'
import { Flex, Text, Link } from 'theme-ui'
import { styles } from './alternativeDonationStyles'

export const AlternativeDonation = () => {
  const { primaryColor, slug, everySlug } = useCampaignInfoContext()

  const donateCrypto = () => {
    gtag.pushEvent('submit_crypto_donation', {})
    const color = primaryColor.replace('#', '')

    window.open(
      createEveryUrl({
        slug,
        everySlug,
        crypto: true,
        extras: {
          theme_color: color,
          theme_color_highlight: color
        }
      }),
      '_self'
    )
  }
  return (
    <Flex sx={styles.container}>
      <Text variant="caption" sx={styles.title}>
        Alternate ways to donate:
      </Text>
      <Flex sx={styles.linksContainer}>
        <Link onClick={donateCrypto} variant="regular">
          Crypto
        </Link>
        <Link
          href="https://www.every.org/donate-stock?utm_source=list"
          variant="regular"
        >
          Stocks
        </Link>
        <Link
          href="https://support.every.org/hc/en-us/articles/360059998953-How-can-I-donate-using-a-Donor-Advised-Fund-DAF-?utm_source=list"
          variant="regular"
        >
          DAF
        </Link>
      </Flex>
    </Flex>
  )
}
