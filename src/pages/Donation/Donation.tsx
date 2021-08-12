import { Box, Button, Flex } from '@theme-ui/components'
import { useState } from 'react'
import { Currency, currencySymbolMap } from 'types/Currency'
import { DonationFrequency } from 'types/Frequency'
import { Disclaimer } from './Disclaimer'
import { Frequency } from './Frequency'
import { Header } from './Header'
import { Input } from './Input'
import { styles } from './donationStyles'
import { useCampaignInfoContext } from '../../hooks/useCampaignInfoContext'
import { createEveryUrl } from 'src/services/url'
import { gtag } from 'src/services/gtag'
import { Brand } from 'src/components/Brand'
import { MatchLedger } from './MatchLedger'

export const Donation = (): JSX.Element => {
  const { slug, everySlug, primaryColor, sponsor } = useCampaignInfoContext()

  const [donationAmount, setDonationAmount] = useState(0)
  const [error, setError] = useState(false)
  const [currency] = useState<Currency>(Currency.USD)
  const [frequency, setFrequency] = useState<DonationFrequency>(
    DonationFrequency.OneTime
  )

  const currencySymbol = currencySymbolMap[currency]

  const donate = () => {
    if (donationAmount < 10) {
      return setError(true)
    }

    const color = primaryColor.replace('#', '')

    window.open(
      createEveryUrl(slug, everySlug, frequency, donationAmount, false, {
        theme_color: color,
        theme_color_highlight: color
      }),
      '_self'
    )
  }

  const donateCrypto = () => {
    gtag.pushEvent('submit_crypto_donation', {})
    const color = primaryColor.replace('#', '')

    window.open(
      createEveryUrl(slug, everySlug, frequency, donationAmount, true, {
        theme_color: color,
        theme_color_highlight: color
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

        <Box sx={styles.donateCryptoButtonContainer}>
          <Button
            onClick={donateCrypto}
            variant="primaryInverted"
            sx={styles.donateButton}
          >
            <span>Donate Crypto, stocks, or DAF</span>
          </Button>
        </Box>

        <Disclaimer />

        <Brand sx={{ flex: 1 }} withBorderTop />
      </Flex>
    </Box>
  )
}
