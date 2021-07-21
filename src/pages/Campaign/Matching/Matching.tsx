import { Text, Flex } from '@theme-ui/components'
import { useState } from 'react'
import { Sponsor } from 'types/Sponsor'
import { Expandable } from 'src/components/Expandable'
import { styles } from './matchingStyles'

interface MatchingProps {
  sponsor: Sponsor
}

export const Matching: React.FC<MatchingProps> = ({ sponsor }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Expandable
      expanded={expanded}
      onClick={() => setExpanded((prev) => !prev)}
      headerStyle={styles.header}
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
