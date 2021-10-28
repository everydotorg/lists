import { Box, Button, Flex } from '@theme-ui/components'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AlternativeDonation } from 'src/components/AlternativeDonation'
import { Brand } from 'src/components/Brand'
import { gtag } from 'src/services/gtag'
import { createEveryUrl } from 'src/services/url'
import { Currency, currencySymbolMap } from 'types/Currency'
import { DonationFrequency } from 'types/Frequency'
import { useCampaignInfoContext } from '../../hooks/useCampaignInfoContext'
import { Disclaimer } from './Disclaimer'
import { styles } from './donationStyles'
import { Frequency } from './Frequency'
import { Header } from './Header'
import { Input } from './Input'
import { MatchLedger } from './MatchLedger'

export const Donation = (): JSX.Element => {
  const { slug, everySlug, primaryColor, sponsor } = useCampaignInfoContext()

  const [donationAmount, setDonationAmount] = useState(0)
  const [error, setError] = useState(false)
  const [currency] = useState<Currency>(Currency.USD)
  const [frequency, setFrequency] = useState<DonationFrequency>(
    DonationFrequency.OneTime
  )
  const route = useRouter()

  const currencySymbol = currencySymbolMap[currency]

  const donate = () => {
    // Lists with no everySlug can't receive donations - they are demos
    if (!everySlug) {
      route.push('/donation-flow-demo')
      return
    }

    if (donationAmount < 10) {
      return setError(true)
    }

    const color = primaryColor.replace('#', '')
    gtag.pushEvent('donate_submit', {
      amount: donationAmount
    })
    window.open(
      createEveryUrl({
        slug,
        everySlug,
        frequency,
        amount: donationAmount,
        crypto: false,
        extras: {
          theme_color: color,
          theme_color_highlight: color
        }
      }),
      '_self'
    )
  }

  const getDonateButtonText = () => {
    if (!donationAmount || donationAmount === 0) {
      return 'Donate'
    }

    const frequencyText =
      frequency === DonationFrequency.Monthly ? 'every month' : ''

    return `Donate ${currencySymbol}${donationAmount} ${currency} ${frequencyText}`
  }

  return (
    <Box sx={styles.page}>
      <Flex sx={styles.container}>
        <Header />

        <Input
          donation={donationAmount}
          setDonation={setDonationAmount}
          currencySymbol={currencySymbol}
          error={error}
          setError={setError}
          sponsor={sponsor}
          campaign={slug}
        />

        <Frequency frequency={frequency} setFrequency={setFrequency} />

        {sponsor && <MatchLedger sponsor={sponsor} donation={donationAmount} />}

        <Box sx={styles.donateButtonContainer}>
          <Button
            id="submit-donation"
            onClick={donate}
            variant="primary"
            sx={styles.donateButton}
          >
            <span>{getDonateButtonText()}</span>
          </Button>
        </Box>

        <Disclaimer />

        <Flex sx={styles.footer}>
          <AlternativeDonation />
          <Brand withBorderTop />
        </Flex>
      </Flex>
    </Box>
  )
}
