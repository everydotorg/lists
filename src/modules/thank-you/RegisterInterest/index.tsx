import { Box, Text, Link } from '@theme-ui/components'
import { useState } from 'react'
import { styles } from './styles'

const FORM_LINK = 'https://everydotorg.typeform.com/to/gfY2ziot'

export const RegisterInterest = (): JSX.Element => {
  const [interestRegistered, setInterestRegistered] = useState(false)

  const registerUserInterest = () => {
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
      <Link
        id="register-interest"
        href={FORM_LINK}
        target="_blank"
        onClick={registerUserInterest}
        sx={styles.button}
        variant="buttons.primaryInverted"
      >
        {interestRegistered ? 'Thank you!' : 'Register Interest'}
      </Link>
    </Box>
  )
}
