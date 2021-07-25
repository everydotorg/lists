import React from 'react'
import Link from 'next/link'
import { Flex, Button } from 'theme-ui'
import { styles } from './backExamplesButtonStyles'

export const BackExamplesButton = () => {
  return (
    <Flex sx={styles.backExamplesContainer}>
      <Link href="/">
        <Button variant="primarySmallInverted" sx={styles.backExamplesButton}>
          <span>Back to examples</span>
        </Button>
      </Link>
    </Flex>
  )
}
