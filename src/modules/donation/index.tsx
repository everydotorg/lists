import { Box, Button, Flex } from '@theme-ui/components'
import { useMemo, useState } from 'react'
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

export const Donation = (): JSX.Element => {
  const { sponsor } = useCampaignInfoContext()

  const [donationAmount, setDonationAmount] = useState(75)
  const [currency, setCurrency] = useState<Currency>(Currency.USD)
  const [frequency, setFrequency] = useState<DonationFrequency>(
    DonationFrequency.OneTime
  )

  const currencySymbol = useMemo(() => currencySymbolMap[currency], [currency])

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
        <Divider inverted space={[3, 6]} />
        <Input
          donation={donationAmount}
          setDonation={setDonationAmount}
          currencySymbol={currencySymbol}
          setCurrency={setCurrency}
        />
        {sponsor && (
          <>
            <Divider inverted space={[3, 6]} sx={{ mx: [3, 6] }} />
            <Matching
              donationAmount={donationAmount}
              currencySymbol={currencySymbol}
            />
          </>
        )}
        <Divider inverted space={[3, 6]} />
        <Frequency frequency={frequency} setFrequency={setFrequency} />
        <Divider inverted space={[3, 6]} />
        <Disclaimer currency={currency} />
      </Flex>
      <Box sx={styles.donateButtonContainer}>
        <Button
          variant="primaryInverted"
          sx={{
            ...styles.donateButton,
            ...(disabled ? styles.donateButtonDisabled : {})
          }}
          disabled={disabled}
        >
          Donate {currencySymbol}
          {donationAmount}
        </Button>
      </Box>
    </Box>
  )
}
