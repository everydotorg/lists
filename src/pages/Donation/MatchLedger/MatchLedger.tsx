import { styles } from './matchLedgerStyles'
import { Box, Flex, Text } from 'theme-ui'
import { Sponsor } from 'types/Sponsor'
import { calcMatching } from 'src/services/utils'

type MatchLedgerProps = {
  sponsor: Sponsor
  donation: number | undefined
}

export const MatchLedger = ({ donation, sponsor }: MatchLedgerProps) => {
  const donationAmount = donation ?? 0

  const matchedDonation = calcMatching(donationAmount, sponsor.threshold)

  const totalDonation = matchedDonation + donationAmount

  return (
    <Box sx={styles.stack}>
      <Flex sx={styles.line}>
        <Text>Your donation</Text>
        <Text>$ {donationAmount}</Text>
      </Flex>
      <Flex sx={styles.line}>
        <Text>Match amount</Text>
        <Text>$ {matchedDonation}</Text>
      </Flex>
      <Flex sx={{ ...styles.line, color: 'text' }}>
        <Text>Total gift</Text>
        <Text>$ {totalDonation}</Text>
      </Flex>
    </Box>
  )
}
