import React from 'react'
import { Flex, Text } from 'theme-ui'
import { EveryOrgLogo } from '../EveryOrgLogo'
import { styles } from './footerStyles'

export const Footer = () => {
  return (
    <Flex sx={styles.footerContainer}>
      <Flex sx={styles.footerContent}>
        <Text variant="small" sx={styles.givelistText}>
          giveli.st
        </Text>
        <Flex>
          <Text sx={styles.logoSpace} variant="small">
            powered by
          </Text>
          <EveryOrgLogo />
        </Flex>
      </Flex>
    </Flex>
  )
}
