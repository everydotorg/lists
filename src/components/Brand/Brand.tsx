import React from 'react'
import { Flex, Text } from 'theme-ui'
import { EveryOrgLogo } from '../EveryOrgLogo'
import { styles } from './brandStyles'

export const Brand = () => {
  return (
    <Flex sx={styles.footerContent}>
      <Text variant="caption" sx={styles.givelistText}>
        giveli.st
      </Text>
      <Flex sx={styles.alignCenter}>
        <Text variant="caption" sx={styles.logoSpace}>
          powered by
        </Text>
        <EveryOrgLogo />
      </Flex>
    </Flex>
  )
}
