import { Box, Button, Text } from '@theme-ui/components'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { styles } from './styles'

export const RegisterInterest = (): JSX.Element => {
  const queryParams = new URLSearchParams(useLocation().search)
  const email = queryParams.get('email')
  const [interestRegistered, setInterestRegistered] = useState(false)

  const registerUserInterest = () => {
    alert(`Interest registered for ${email}`)
    setInterestRegistered(true)
  }

  return (
    <Box sx={styles.container}>
      <Text variant="regular">
        Want to make your own list of nonprofits?{' '}
        <Text sx={styles.lightText}>
          Register your interest and we will let you know as soon as the
          Giveli.st creator is ready try out!
        </Text>
      </Text>
      <Button
        onClick={registerUserInterest}
        sx={styles.button}
        variant="primaryInverted"
        disabled={interestRegistered}
      >
        {interestRegistered ? 'Thank you!' : 'Register Interest'}
      </Button>
    </Box>
  )
}
