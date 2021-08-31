import { Box, Flex, Button, Text, Link } from 'theme-ui'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { baseUrlWithPaths, facebookShare, twitterShare } from 'src/services/url'
import { styles } from './thankYouStyles'
import { Icon } from 'src/components/Icon'
import { Divider } from 'src/components/Divider'
import { CopyToClipboard } from 'src/components/CopyToClipboard'
import { Card } from './Card'
import { Brand } from 'src/components/Brand'
import { useProgressData } from 'src/hooks/useProgressData'
import { Goal } from 'src/components/Goal'
import { useRouter } from 'next/router'
import { gtag } from 'src/services/gtag'
import { useEffect, useState } from 'react'
import { everyOrgDescription } from 'src/components/AboutModal/About/About'

export const ThankYou = (): JSX.Element | null => {
  const { slug, socialShareText, name, showGoalOnThankyouPage } =
    useCampaignInfoContext()
  const progress = useProgressData()
  const router = useRouter()

  const { showsignup } = router.query

  const [shareUrl, setShareUrl] = useState('')

  useEffect(() => {
    setShareUrl(baseUrlWithPaths(slug))
  }, [slug])

  const navigateToSignup = () => {
    gtag.pushEvent('signup', {})
    window.open('https://www.every.org/signup?utm_source=givelist', '_blank')
  }

  return (
    <Box sx={styles.page}>
      <Flex sx={styles.header}>
        <Text variant="title" sx={{ color: 'textGray', fontWeight: '400' }}>
          Thank you for supporting:
        </Text>
        <Text variant="title">{name}</Text>
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
          description={`A reciept was sent to your email. Your donation to this Givelist is
          powered by Every.org - a ${everyOrgDescription}`}
          inverted
        ></Card>
        <Card
          title={`Share this Givelist`}
          description="Turn this moment into a movement by texting or emailing friends, setting your link in bio, and sharing to social media."
          renderActions={
            <Flex
              sx={{ alignItems: 'center', justifyContent: 'space-between' }}
            >
              <CopyToClipboard
                id="thankyou-copylink"
                text={shareUrl}
                as="a"
                variant="secondaryInverted"
                type="button"
                iconSize="small"
                sx={{
                  flexBasis: 0,
                  flexGrow: 1,
                  maxWidth: 'max-content',
                  mr: 2
                }}
              >
                giveli.st/{slug}
              </CopyToClipboard>
              <Flex
                sx={{
                  alignItems: 'stretch',
                  '& > *:not(:last-child)': { mr: 2 }
                }}
              >
                <Link
                  href={`mailto:?subject=Please support ${name}&body=${socialShareText} ${shareUrl}`}
                  variant="buttons.secondaryInverted"
                >
                  <Text>Email</Text>
                </Link>
                <Icon.Facebook
                  variant="buttons.secondaryInverted"
                  as="a"
                  id="facebook-share"
                  href={facebookShare(shareUrl, socialShareText)}
                  target="_blank"
                  width={20}
                  height={20}
                />

                <Icon.Twitter
                  id="twitter-share"
                  width={20}
                  height={20}
                  target="_blank"
                  variant="buttons.secondaryInverted"
                  href={twitterShare(shareUrl, socialShareText)}
                />
              </Flex>
            </Flex>
          }
          inverted
        />
        <Card
          title="Want to make your own Givelist?"
          description="Take a 3 minute survey to help us shape the best Givelist experience for you."
          renderActions={
            <Flex sx={{ alignItems: 'flex-start' }}>
              <Link
                id="register-interest"
                variant="buttons.secondaryInverted"
                href="https://docs.google.com/forms/d/e/1FAIpQLSe0Rzl5TXdyZ64qkxVSFRbkTATJd2Gw6oeNnBnLgB50u0tw2A/viewform"
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
