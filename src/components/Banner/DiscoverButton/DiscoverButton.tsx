import React from 'react'
import Link from 'next/link'
import { Flex, Button } from 'theme-ui'
import { styles } from './discoverButtonStyles'

export const DiscoverButton = () => {
  return (
    <Flex sx={styles.discoverContainer}>
      <Link href="/">
        <Button variant="primarySmallInverted" sx={styles.discoverButton}>
          <span>Discover more Givelists</span>
        </Button>
      </Link>
    </Flex>
  )
}
