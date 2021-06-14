import { Box, Flex, Input, Label, Text } from '@theme-ui/components'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { DonationFrequency } from '../../../types/Frequency'
import { styles } from './styles'
import React from 'react'

interface FrequencyProps {
  frequency: DonationFrequency
  setFrequency: React.Dispatch<React.SetStateAction<DonationFrequency>>
}

export const Frequency = ({
  frequency,
  setFrequency
}: FrequencyProps): JSX.Element => {
  const { primaryColor } = useCampaignInfoContext()

  const selected = {
    bg: 'white',
    color: primaryColor
  }

  return (
    <Box sx={styles.container}>
      <Label variant="text.title" sx={styles.label}>
        How often?
      </Label>
      <Flex sx={styles.selectorContainer}>
        <Label
          onClick={() => setFrequency(DonationFrequency.OneTime)}
          htmlFor="one-time"
          sx={{
            ...styles.frequencyBase,
            ...styles.frequencyLeft,
            ...(frequency === DonationFrequency.OneTime ? selected : {})
          }}
        >
          <Input
            type="radio"
            name="frequency"
            id="one-time"
            sx={styles.input}
          />
          One Time
        </Label>
        <Label
          htmlFor="monthly"
          onClick={() => setFrequency(DonationFrequency.Monthly)}
          sx={{
            ...styles.frequencyBase,
            ...styles.frequencyRight,
            ...(frequency === DonationFrequency.Monthly ? selected : {})
          }}
        >
          <Input type="radio" name="frequency" id="monthly" sx={styles.input} />
          Monthly
        </Label>
      </Flex>
      <Box sx={styles.donationContainer}>
        <Text variant="regular" sx={styles.donationText}>
          Monthly gifts help nonprofits focus on their mission and long-term
          impact, not fundraising.
        </Text>
      </Box>
    </Box>
  )
}
