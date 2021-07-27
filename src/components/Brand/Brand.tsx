import React from 'react'
import { Flex, Text, ThemeUIStyleObject } from 'theme-ui'
import { EveryOrgLogo } from '../EveryOrgLogo'
import { styles } from './brandStyles'

type BrandProps = {
  sx?: ThemeUIStyleObject
}

export const Brand = ({ sx = {} }: BrandProps) => {
  return (
    <Flex sx={{ ...styles.footerContent, ...sx }}>
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
