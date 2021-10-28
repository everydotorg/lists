import { Flex, ThemeProvider, Text, Link, Button } from 'theme-ui'
import { theme } from 'src/styles/theme'
import React from 'react'
import { useRouter } from 'next/router'

const DemoDonation = () => {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={() => router.back()}
        variant="primarySmallInverted"
        sx={{
          position: 'absolute',
          top: 4,
          left: 4
        }}
      >
        <span>Back</span>
      </Button>

      <Flex
        sx={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          px: 4,
          bg: 'backgroundGray',
          '& a': {
            fontWeight: 500
          }
        }}
      >
        <Text>Hello! This Givelist is just for demonstration purposes.</Text>
        <Text>
          {' '}
          To turn it into a live fundraiser that can raise money for the
          nonprofits on this demo link please contact{' '}
          <Link href="mailto:ed@every.org">ed@every.org</Link>
        </Text>
      </Flex>
    </ThemeProvider>
  )
}

export default DemoDonation
