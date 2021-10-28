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
import { Brand } from 'src/components/Brand'
import { MatchLedger } from './MatchLedger'
import { AlternativeDonation } from 'src/components/AlternativeDonation'
import { useRouter } from 'next/router'

export const Donation = (): JSX.Element => {
  const { slug, sponsor } = useCampaignInfoContext()

  const [donationAmount, setDonationAmount] = useState(0)
  const [error, setError] = useState(false)
  const [currency] = useState<Currency>(Currency.USD)
  const [frequency, setFrequency] = useState<DonationFrequency>(
    DonationFrequency.OneTime
  )
  const route = useRouter()

  const currencySymbol = currencySymbolMap[currency]

  const donate = () => route.push('/donation-flow-demo')

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
