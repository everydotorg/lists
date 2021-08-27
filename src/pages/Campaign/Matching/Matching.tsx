import { Link, Text, Flex } from '@theme-ui/components'
import { useState } from 'react'
import { Sponsor } from 'types/Sponsor'
import { Expandable } from 'src/components/Expandable'
import { styles } from './matchingStyles'
import { gtag } from 'src/services/gtag'
import { matchingMailto } from 'src/services/url'

interface MatchingProps {
  sponsor: Sponsor
  campaign: string
}

export const Matching = ({ sponsor, campaign }: MatchingProps) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpandable = () => {
    gtag.pushEvent(`${expanded ? 'close' : 'open'}_matching`, {})
    setExpanded((prev) => !prev)
  }

  return (
    <Expandable
      expanded={expanded}
      onClick={toggleExpandable}
      headerStyle={styles.header}
      chevronStyle={styles.chevronDown}
      containerStyle={styles.container}
      space={2}
      renderTitle={
        <Flex>
          <Text variant="caption" sx={styles.matchingTitle}>
            Your donation will be <strong>matched</strong> up to{' '}
            <strong>${sponsor.threshold}</strong>
          </Text>
        </Flex>
      }
      renderDescription={
        <Text as="p" variant="caption" sx={styles.matchingDescription}>
          {sponsor.description} Want to donate and increase the match pool?{' '}
          <Link href={matchingMailto(campaign)}>Email us.</Link>
        </Text>
      }
    />
  )
}
