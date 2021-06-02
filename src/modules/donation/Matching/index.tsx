import { Text, Box } from '@theme-ui/components'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { Expandable } from '../../shared/Expandable'
import { styles } from './styles'

interface MatchingProps {
  donationAmount: number
  currencySymbol: string
}

export const Matching = ({
  donationAmount,
  currencySymbol
}: MatchingProps): JSX.Element => {
  const { sponsor } = useCampaignInfoContext()

  return (
    <Box sx={{ mx: 3 }}>
      <Expandable
        containerStyle={styles.container}
        chevronStyle={styles.chevronDown}
        space={2}
        chevronProps={{ inverted: true }}
        renderTitle={
          <Box>
            <Text variant="regular" sx={{ color: 'white' }}>
              Another{' '}
              <strong>
                {currencySymbol}
                {Math.min(donationAmount, sponsor?.threshold ?? 0)}
              </strong>{' '}
              will be matched by <strong>{sponsor?.name}</strong>
            </Text>
          </Box>
        }
        renderDescription={
          <Text variant="small" sx={styles.descriptionText}>
            {sponsor?.description}
          </Text>
        }
      />
    </Box>
  )
}
