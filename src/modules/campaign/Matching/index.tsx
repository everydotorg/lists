import { Text, Flex } from '@theme-ui/components'
import { Sponsor } from '../../../types/Sponsor'
import { Expandable } from '../../shared/Expandable'
import { styles } from './styles'

interface MatchingProps {
  sponsor: Sponsor
}

export const Matching = ({ sponsor }: MatchingProps): JSX.Element => {
  return (
    <Expandable
      containerStyle={styles.container}
      descriptionStyle={styles.description}
      chevronStyle={styles.chevronDown}
      space={2}
      renderTitle={
        <Flex>
          <Text variant="small" sx={{ color: 'text' }}>
            Matching {sponsor.ratio}
            <Text variant="small" sx={{ opacity: '0.8' }}>
              {' '}
              up to{' '}
            </Text>
            ${sponsor.threshold} per donation
          </Text>
        </Flex>
      }
      renderDescription={
        <Text variant="small" sx={{ opacity: '0.8' }}>
          {sponsor.description}
        </Text>
      }
    />
  )
}
