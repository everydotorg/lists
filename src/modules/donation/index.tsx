import { Box, Button, Flex } from '@theme-ui/components'
import { useState } from 'react'
import { Currency, currencySymbolMap } from '../../types/Currency'
import { DonationFrequency } from '../../types/Frequency'
import { Divider } from '../shared/Divider'
import { Disclaimer } from './Disclaimer'
import { Frequency } from './Frequency'
import { Header } from './Header'
import { Input } from './Input'
import { styles } from './styles'
import { isIOS } from '../../utils/isIOS'
import { Matching } from './Matching'
import { useCampaignInfoContext } from '../../hooks/useCampaignInfoContext'
import { createEveryUrl } from '../../utils/url'
import { getDefaultAmountAbTest } from '../../donation-amount-ab-test'

export const Donation = (): JSX.Element => {
  const { slug, everySlug, sponsor, primaryColor } = useCampaignInfoContext()
  const defaultDonationAmount = getDefaultAmountAbTest()
  const [donationAmount, setDonationAmount] = useState(defaultDonationAmount)
  const [error, setError] = useState(false)
  const [currency, setCurrency] = useState<Currency>(Currency.USD)
  const [frequency, setFrequency] = useState<DonationFrequency>(
    DonationFrequency.OneTime
  )

  const currencySymbol = currencySymbolMap[currency]

  const disabled = donationAmount <= 0

  const donate = () => {
    if (donationAmount < 10) {
      return setError(true)
    }

    const color = primaryColor.replace('#', '')

    window.open(
      createEveryUrl(slug, everySlug, frequency, donationAmount, {
        theme_color: color,
        theme_color_highlight: color
      }),
      '_self'
    )
  }

  const getDonateButtonText = () => {
    if (!donationAmount || donationAmount === 0) {
      return 'Enter amount'
    }

    const frequencyText =
      frequency === DonationFrequency.Monthly ? 'every month' : ''
    return `Donate ${currencySymbol} ${donationAmount} ${currency} ${frequencyText}`
  }

  return (
    <Box
      sx={{
        ...styles.page,
        height: isIOS() ? '-webkit-fill-available' : '100vh'
      }}
    >
      <Flex sx={styles.container}>
        <Header />
        <Divider inverted space={3} />
        <Input
          donation={donationAmount}
          setDonation={setDonationAmount}
          currencySymbol={currencySymbol}
          setCurrency={setCurrency}
          error={error}
          setError={setError}
        />
        {sponsor && (
          <>
            <Divider inverted space={3} sx={{ mx: 3 }} />
            <Matching
              currencySymbol={currencySymbol}
              donationAmount={donationAmount}
              sponsor={sponsor}
            />
          </>
        )}
        <Divider inverted space={3} />
        <Frequency frequency={frequency} setFrequency={setFrequency} />
        <Divider inverted space={3} />
        <Disclaimer currency={currency} />
      </Flex>
      <Box sx={styles.donateButtonContainer}>
        <Button
          id="submit-donation"
          onClick={donate}
          variant="primaryInverted"
          sx={{
            ...styles.donateButton,
            ...(disabled ? styles.donateButtonDisabled : {})
          }}
          disabled={disabled}
        >
          {getDonateButtonText()}
        </Button>
      </Box>
    </Box>
  )
}
