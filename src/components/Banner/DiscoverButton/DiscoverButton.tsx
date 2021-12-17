import React from 'react'
import Link from 'next/link'
import { Flex, Button } from 'theme-ui'
import { styles } from './discoverButtonStyles'
import { gtag } from 'src/services/gtag'

export const DiscoverButton = () => {
  const pushEvent = () =>
    gtag.pushEvent('back_home', {
      origin: 'discover more'
    })

  return (
    <Flex sx={styles.discoverContainer}>
      <Link href="/">
        <Button
          onClick={pushEvent}
          variant="primarySmallInverted"
          sx={styles.discoverButton}
        >
          <span>Discover more lists</span>
        </Button>
      </Link>
    </Flex>
  )
}
