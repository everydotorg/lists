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
      containerStyle={styles.container}
      space={2}
      renderTitle={
        <Flex>
          <Text variant="small" sx={{ color: 'text', lineHeight: '32px' }}>
            Your donation will be <strong>Matched {sponsor.ratio}</strong> up to{' '}
            <strong>${sponsor.threshold}</strong>
          </Text>
        </Flex>
      }
      renderDescription={
        <Text variant="small" sx={{ opacity: '0.8', lineHeight: '24px' }}>
          {sponsor.description}
        </Text>
      }
    />
  )
}
