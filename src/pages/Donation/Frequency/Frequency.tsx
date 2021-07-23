import { Box, Flex, Input, Label, Text } from '@theme-ui/components'
import { DonationFrequency } from 'types/Frequency'
import { styles } from './frequencyStyles'
import React from 'react'
import { ArrowUpIcon } from 'src/components/ArrowUpIcon'

interface FrequencyProps {
  frequency: DonationFrequency
  setFrequency: React.Dispatch<React.SetStateAction<DonationFrequency>>
}

export const Frequency = ({
  frequency,
  setFrequency
}: FrequencyProps): JSX.Element => {
  return (
    <Box sx={styles.container}>
      <Label variant="text.small" sx={styles.label}>
        How often?
      </Label>
      <Flex sx={styles.selectorContainer}>
        <Label
          id="frequency-one-time"
          onClick={() => setFrequency(DonationFrequency.OneTime)}
          htmlFor="one-time"
          variant="text.small"
          sx={{
            ...styles.frequencyBase,
            ...(frequency === DonationFrequency.OneTime
              ? styles.selectedFrequency
              : {})
          }}
        >
          <Input
            type="radio"
            name="frequency"
            id="one-time"
            sx={styles.input}
          />
          <span>One-time</span>
        </Label>
        <Label
          id="frequency-monthly"
          htmlFor="monthly"
          onClick={() => setFrequency(DonationFrequency.Monthly)}
          variant="text.small"
          sx={{
            ...styles.frequencyBase,
            ...(frequency === DonationFrequency.Monthly
              ? styles.selectedFrequency
              : {})
          }}
        >
          <Input type="radio" name="frequency" id="monthly" sx={styles.input} />
          <span>Monthly</span>
        </Label>
      </Flex>
      {frequency === DonationFrequency.OneTime ? (
        <Box sx={styles.donationContainer}>
          <Box sx={styles.donationContainerArrow}>
            <ArrowUpIcon />
          </Box>
          <Text as="p" variant="small" sx={styles.donationText}>
            Monthly gifts help nonprofits focus on their mission and long-term
            impact, not fundraising.
          </Text>
        </Box>
      ) : null}
    </Box>
  )
}
