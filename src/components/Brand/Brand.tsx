import React from 'react'
import { Flex, Text, ThemeUIStyleObject } from 'theme-ui'
import { Icon } from '../Icon'
import { styles } from './brandStyles'

type BrandProps = {
  sx?: ThemeUIStyleObject
  withBorderTop?: boolean
}

export const Brand = ({ sx = {}, withBorderTop }: BrandProps) => {
  return (
    <Flex sx={{ ...styles.brandContainer, ...sx }}>
      <Flex
        sx={{
          ...styles.brandContent,
          ...(withBorderTop ? styles.withBorderTop : {})
        }}
      >
        <Text variant="caption" sx={styles.givelistText}>
          giveli.st
        </Text>
        <Flex sx={styles.poweredBy}>
          <Text variant="caption" sx={styles.logoSpace}>
            powered by
          </Text>
          <Icon.Every />
        </Flex>
      </Flex>
    </Flex>
  )
}
