import { Box, Flex, Input, Label, Text } from '@theme-ui/components'
import { DonationFrequency } from 'types/Frequency'
import { styles } from './frequencyStyles'
import React from 'react'
import { ArrowUpIcon } from 'src/components/ArrowUpIcon'
import { useTransition, config } from '@react-spring/core'
import cubicBezier from 'bezier-easing'
import { animated } from '@react-spring/web'

interface FrequencyProps {
  frequency: DonationFrequency
  setFrequency: React.Dispatch<React.SetStateAction<DonationFrequency>>
}

export const Frequency = ({
  frequency,
  setFrequency
}: FrequencyProps): JSX.Element => {
  const transition = useTransition(frequency !== DonationFrequency.Monthly, {
    from: {
      transform: 'translateY(-200%)',
      opacity: 0,
      maxHeight: '0px'
    },
    enter: {
      transform: 'translateY(0%)',
      opacity: 1,
      maxHeight: '400px'
    },
    leave: {
      transform: 'translateY(-200%)',
      opacity: 0,
      maxHeight: '0px'
    },
    expires: false,
    config: {
      ...config.default,
      duration: 400,
      easing: cubicBezier(0.55, 0.08, 0, 1)
    }
  })

  const AnimatedBox = animated(Box)

  return (
    <Box sx={styles.container}>
      <Label variant="text.small" sx={styles.label}>
        How often?
      </Label>
      <Flex sx={styles.selectorContainer}>
        <Input type="radio" name="frequency" id="one-time" sx={styles.input} />
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
        <Input type="radio" name="frequency" id="monthly" sx={styles.input} />
        <Label
          id="frequency-monthly"
          htmlFor="monthly"
          onClick={() => setFrequency(DonationFrequency.Monthly)}
          variant="text.small"
          sx={{
            ...styles.frequencyBase
          }}
        >
          <span>Monthly</span>
        </Label>
      </Flex>
      {transition(
        (style, show) =>
          show && (
            <AnimatedBox style={style}>
              <Box sx={styles.donationContainer}>
                <Box sx={styles.donationContainerArrow}>
                  <ArrowUpIcon />
                </Box>
                <Text as="p" variant="small" sx={styles.donationText}>
                  Monthly gifts help nonprofits focus on their mission and
                  long-term impact, not fundraising.
                </Text>
              </Box>
            </AnimatedBox>
          )
      )}
    </Box>
  )
}
