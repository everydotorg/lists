import { Box, Flex, Button, Text, Link } from 'theme-ui'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { styles } from './thankYouStyles'
import { Divider } from 'src/components/Divider'
import { Card } from 'src/components/Card'
import { Brand } from 'src/components/Brand'
import { useProgressData } from 'src/hooks/useProgressData'
import { Goal } from 'src/components/Goal'
import { useRouter } from 'next/router'
import { gtag } from 'src/services/gtag'
import { everyOrgDescription } from 'src/components/AboutModal/About/About'
import { ShareCard } from 'src/components/ShareCard'

export const ThankYou = () => {
  const { name, showGoalOnThankyouPage } = useCampaignInfoContext()

  const progress = useProgressData()
  const router = useRouter()

  const { showsignup } = router.query

  const navigateToSignup = () => {
    gtag.pushEvent('signup', {})
    window.open('https://www.every.org/signup?utm_source=givelist', '_blank')
  }

  return (
    <Box sx={styles.page}>
      <Flex sx={styles.header}>
        <Text variant="heading" sx={{ color: 'textGray', fontWeight: '400' }}>
          Thank you for supporting:
        </Text>
        <Text variant="heading">{name}</Text>
        {progress && showGoalOnThankyouPage && (
          <Goal progress={progress} sx={styles.progressGoal} />
        )}
      </Flex>
      <Divider space={[3, 6]} />
      <Flex sx={styles.cardList}>
        {Boolean(showsignup) && (
          <Card
            title="Claim your free Every.org account"
            description="Save your charitable giving history. Explore, donate, and share."
            renderActions={
              <Flex sx={{ alignItems: 'flex-start' }}>
                <Button onClick={navigateToSignup} variant="secondary">
                  Sign up to every.org
                </Button>
              </Flex>
            }
          />
        )}

        <Card
          description={`A receipt was sent to your email. Your donation to this giveli.st is
          powered by Every.org - a ${everyOrgDescription}`}
          inverted
        ></Card>

        <ShareCard />

        <Card
          title="Want to make your own Givelist?"
          description="Take a 3 minute survey to help us shape the best giveli.st experience for you."
          renderActions={
            <Flex sx={{ alignItems: 'flex-start' }}>
              <Link
                id="register-interest"
                variant="buttons.secondaryInverted"
                href="https://forms.gle/dWCGgbm7NX4Ln8BP7"
                target="_blank"
                rel="noopener"
              >
                <span>Begin survey</span>
              </Link>
            </Flex>
          }
          inverted
        />
      </Flex>

      <Brand sx={{ flex: 1 }} withBorderTop />
    </Box>
  )
}
