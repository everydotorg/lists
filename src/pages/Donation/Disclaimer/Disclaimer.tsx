import { Box, Text } from 'theme-ui'

export const Disclaimer: React.FC = () => {
  return (
    <Box
      sx={{
        px: 4,
        mt: [7, 6],
        mb: [7, 9]
      }}
    >
      <Text
        as="p"
        variant="caption"
        sx={{ color: 'textGray', textAlign: 'center' }}
      >
        You will be redirected to Every.org, a tax-exempt 501(c)(3) charity, to
        complete your donation.
      </Text>
    </Box>
  )
}
