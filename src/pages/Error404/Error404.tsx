import { Flex, ThemeProvider, Text, Button } from 'theme-ui'
import { theme } from 'src/styles/theme'
import { styles } from './error404styles'
import Link from 'next/link'
import React from 'react'

export const Error404 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex sx={styles.container}>
        <Text as="h1" variant="h1">
          Sorry, we couldn't find the campaign
        </Text>
        <Text variant="small" sx={styles.descriptionText}>
          Please check that the url is from an active campaign
        </Text>
        <Link href="/">
          <Button>Discover more lists</Button>
        </Link>
      </Flex>
    </ThemeProvider>
  )
}
