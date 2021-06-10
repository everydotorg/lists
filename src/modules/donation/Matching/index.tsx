import { Text, Box } from '@theme-ui/components'
import { Sponsor } from '../../../types/Sponsor'
import { Expandable } from '../../shared/Expandable'
import { styles } from './styles'

interface MatchingProps {
  sponsor: Sponsor
  donationAmount: number
  currencySymbol: string
}

export const Matching = ({
  currencySymbol,
  donationAmount,
  sponsor
}: MatchingProps): JSX.Element => {
  return (
    <Box sx={{ mx: [3, 6] }}>
      <Expandable
        headerStyle={styles.container}
        chevronStyle={styles.chevronDown}
        space={2}
        chevronProps={{ inverted: true }}
        renderTitle={
          <Box>
            <Text variant="regular" sx={{ color: 'white' }}>
              Another{' '}
              <strong>
                {currencySymbol}
                {Math.min(donationAmount, sponsor.threshold ?? 0)}
              </strong>{' '}
              will be matched by <strong>{sponsor.name}</strong>
            </Text>
          </Box>
        }
        renderDescription={
          <Text variant="small" sx={styles.descriptionText}>
            {sponsor.description}
          </Text>
        }
      />
    </Box>
  )
}
