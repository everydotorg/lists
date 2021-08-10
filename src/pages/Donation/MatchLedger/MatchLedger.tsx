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
        <Text>$ {donationAmount}.00 USD</Text>
      </Flex>
      <Flex sx={styles.line}>
        <Text>Matched donation</Text>
        <Text>$ {matchedDonation}.00 USD</Text>
      </Flex>
      <Flex sx={{ ...styles.line, color: 'text' }}>
        <Text>Total donation</Text>
        <Text>$ {totalDonation}.00 USD</Text>
      </Flex>
    </Box>
  )
}
