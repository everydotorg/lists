import React from 'react'
import Link from 'next/link'
import { Flex, Button } from 'theme-ui'
import { styles } from './backExamplesButtonStyles'
import { gtag } from 'src/services/gtag'

export const BackExamplesButton = () => {
  const pushEvent = () => {
    gtag.pushEvent('back_home', {
      origin: 'back to examples'
    })
  }

  return (
    <Flex sx={styles.backExamplesContainer}>
      <Link href="/">
        <Button
          onClick={pushEvent}
          variant="primarySmallInverted"
          sx={styles.backExamplesButton}
        >
          <span>Back to examples</span>
        </Button>
      </Link>
    </Flex>
  )
}
