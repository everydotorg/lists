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

export const Donation = (): JSX.Element => {
  const [donationAmount, setDonationAmount] = useState(75)
  const [currency, setCurrency] = useState<Currency>(Currency.USD)
  const [frequency, setFrequency] = useState<DonationFrequency>(
    DonationFrequency.OneTime
  )

  const currencySymbol = useMemo(() => currencySymbolMap[currency], [currency])

  return (
    <Box
      sx={{
        ...styles.page,
        height: isIOS() ? '-webkit-fill-available' : '100vh'
      }}
    >
      <Flex sx={{ flexDirection: 'column' }}>
        <Header />
        <Divider inverted space={3} />
        <Input
          donation={donationAmount}
          setDonation={setDonationAmount}
          currencySymbol={currencySymbol}
          setCurrency={setCurrency}
        />
        <Divider inverted space={3} />
        <Frequency frequency={frequency} setFrequency={setFrequency} />
        <Divider inverted space={3} />
        <Disclaimer currency={currency} />
      </Flex>
      <Box sx={styles.donateButtonContainer}>
        <Button
          variant="primaryInverted"
          sx={styles.donateButton}
          disabled={donationAmount <= 0}
        >
          Donate {currencySymbol}
          {donationAmount}
        </Button>
      </Box>
    </Box>
  )
}
