import { Box, Flex, Input, Label, Text } from '@theme-ui/components'
import { DonationFrequency } from 'types/Frequency'
import { styles } from './frequencyStyles'
import React from 'react'
import { Icon } from 'src/components/Icon'
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
        <Input
          type="radio"
          name="frequency"
          id="one-time"
          sx={styles.input}
          defaultChecked={frequency === DonationFrequency.OneTime}
        />
        <Label
          id="frequency-one-time"
          onClick={() => setFrequency(DonationFrequency.OneTime)}
          htmlFor="one-time"
          variant="text.small"
          sx={{
            ...styles.frequencyBase,
            ...styles.selectedFrequency
          }}
        >
          <span>One-time</span>
        </Label>
        <Input
          type="radio"
          name="frequency"
          id="monthly"
          sx={styles.input}
          defaultChecked={frequency === DonationFrequency.Monthly}
        />
        <Label
          id="frequency-monthly"
          htmlFor="monthly"
          onClick={() => setFrequency(DonationFrequency.Monthly)}
          variant="text.small"
          sx={{
            ...styles.frequencyBase
          }}
        >
          <Text sx={{ mr: 2 }}>Monthly</Text>
          <Icon.Star
            fill={
              frequency === DonationFrequency.Monthly ? 'currentcolor' : 'none'
            }
          />
        </Label>
      </Flex>
      <Box sx={styles.donationContainer}>
        <Box sx={styles.donationContainerArrow}>
          <Icon.ArrowUp />
        </Box>
        <Text as="p" variant="small" sx={styles.donationText}>
          Monthly gifts help nonprofits focus on their mission and long-term
          impact, not fundraising.
        </Text>
      </Box>
    </Box>
  )
}
