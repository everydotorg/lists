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

export const Donation = (): JSX.Element => {
  const { slug, sponsor, primaryColor } = useCampaignInfoContext()

  const [donationAmount, setDonationAmount] = useState(75)
  const [currency, setCurrency] = useState<Currency>(Currency.USD)
  const [frequency, setFrequency] = useState<DonationFrequency>(
    DonationFrequency.OneTime
  )

  const currencySymbol = currencySymbolMap[currency]

  const disabled = donationAmount <= 0

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
          onClick={() =>
            window.open(
              createEveryUrl(slug, frequency, donationAmount, {
                theme_color: 'FFF', // @todo: confirm
                theme_color_highlight: primaryColor.replace('#', '')
              }),
              '_self'
            )
          }
          variant="primaryInverted"
          sx={{
            ...styles.donateButton,
            ...(disabled ? styles.donateButtonDisabled : {})
          }}
          disabled={disabled}
        >
          Donate {currencySymbol}
          {donationAmount} {currency}{' '}
          {frequency === DonationFrequency.Monthly ? 'every month' : ''}
        </Button>
      </Box>
    </Box>
  )
}
