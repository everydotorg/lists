import React from 'react'
import { Flex, Link, Text, ThemeUIStyleObject } from 'theme-ui'
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
        <Flex sx={styles.poweredBy}>
          <Link
            sx={styles.everyLink}
            href="https://every.org?utm_source=list"
            target="_blank"
          >
            <Icon.Every />
          </Link>
          <Text variant="caption" sx={styles.logoSpace}>
            Lists
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
