import { Box, Text } from 'theme-ui'

export const Disclaimer: React.FC = () => {
  return (
    <Box
      sx={{
        px: 3,
        pb: 3
      }}
    >
      <Text as="p" variant="regular" sx={{ color: 'white' }}>
        You will be redirected to Every.org to complete your donation.
      </Text>
    </Box>
  )
}
