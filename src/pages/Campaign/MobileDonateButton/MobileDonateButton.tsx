import React from 'react'
import { Box, Button } from 'theme-ui'
import { styles } from './mobileDonateButtonStyles'

interface MobileDonateButtonProps {
  onClick: () => void
}
export const MobileDonateButton = ({ onClick }: MobileDonateButtonProps) => {
  return (
    <Box sx={styles.buttonContainer}>
      <Button
        id="campaign-mobile-donate"
        sx={styles.submitButton}
        onClick={onClick}
        type="button"
      >
        <span>Donate</span>
      </Button>
    </Box>
  )
}
