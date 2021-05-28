import { Box, Button, Flex } from '@theme-ui/components'
import { useState } from 'react'
import { Divider } from '../shared/Divider'
import { Header } from './Header'
import { Input } from './Input'
import { styles } from './styles'

export const Donation = (): JSX.Element => {
  const [donationAmount, setDonationAmount] = useState(75)

  return (
    <Box sx={styles.page}>
      <Flex sx={{ flexDirection: 'column' }}>
        <Header />

        <Divider inverted space={3} />
        <Input value={donationAmount} setValue={setDonationAmount} />
      </Flex>
      <Button variant="primaryInverted">Donate $100</Button>
    </Box>
  )
}
