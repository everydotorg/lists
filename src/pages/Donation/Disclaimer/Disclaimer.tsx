import { Box, Text } from 'theme-ui'

export const Disclaimer: React.FC = () => {
  return (
    <Box
      sx={{
        px: 4
      }}
    >
      <Text as="p" variant="regular" sx={{ color: 'textGray' }}>
        You will be redirected to Every.org to complete your donation.
      </Text>
    </Box>
  )
}
