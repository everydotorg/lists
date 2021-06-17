import { Box, Text } from 'theme-ui'

interface DisclaimerProps {
  currency: string
}

export const Disclaimer = ({ currency }: DisclaimerProps): JSX.Element => {
  return (
    <Box
      sx={{
        px: 3,
        pb: 3
      }}
    >
      <Text as="p" variant="regular" sx={{ color: 'white' }}>
        You will be redirected to Every.org to complete your {currency} donation
        to a United States registered charity.
      </Text>
    </Box>
  )
}
