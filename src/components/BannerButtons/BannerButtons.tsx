import { useState } from 'react'
import { Flex, Button, ThemeUIStyleObject } from 'theme-ui'
import { About } from '../../pages/Campaign/About'
import { styles } from './bannerButtonsStyles'

interface BannerButtonsProps {
  sx?: ThemeUIStyleObject
}

export const BannerButtons: React.FC<BannerButtonsProps> = ({ sx = {} }) => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <Flex sx={{ ...styles.group, ...sx }}>
        <Button
          id="open-about"
          variant="primarySmallInverted"
          sx={styles.aboutButton}
          onClick={() => setShowPopup(true)}
        >
          <span>About giveli.st</span>
        </Button>
      </Flex>

      {showPopup && <About onClose={() => setShowPopup(false)} />}
    </>
  )
}
