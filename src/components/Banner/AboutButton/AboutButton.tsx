import { useState } from 'react'
import { Flex, Button } from 'theme-ui'
import { About } from '../../../pages/Campaign/About'
import { styles } from './aboutButtonStyles'

export const AboutButton = () => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <Flex sx={styles.aboutContainer}>
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
