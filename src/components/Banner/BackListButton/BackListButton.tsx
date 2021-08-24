import React from 'react'
import Link from 'next/link'
import { Flex, Button } from 'theme-ui'
import { styles } from './backListButtonStyles'
import { gtag } from 'src/services/gtag'

export const BackListButton = () => {
  const pushEvent = () => {
    gtag.pushEvent('back_home', {
      origin: 'back to list'
    })
  }

  return (
    <Flex sx={styles.backListContainer}>
      <Link href="/">
        <Button
          onClick={pushEvent}
          variant="primarySmallInverted"
          sx={styles.backListButton}
        >
          <span>Back</span>
        </Button>
      </Link>
    </Flex>
  )
}
