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
        <Text variant="caption" sx={{ mt: 2 }}>
          A tax deductable reciept was sent to your email. Your donation to this
          givelist is powered by every.org - a registererd 501(c)(3) nonprofit
          dedicated to providing free tools that encourage individuals to take
          action and spread generosity.{' '}
        </Text>
        {progress && showGoalOnThankyouPage && (
          <Goal progress={progress} sx={styles.progressGoal} />
        )}
      </Flex>
      <Divider space={[3, 6]} />
      <Flex sx={styles.cardList}>
        {Boolean(showsignup) && (
          <Card
            title="Claim your free every.org account"
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
          title="Share this Givelist"
          description="This Givelist supports nonprofits dedicated to ending the abuse of animals raised for food."
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
                <Icon.Facebook
                  variant="buttons.secondaryInverted"
                  as="a"
                  id="facebook-share"
                  href={facebookShare(shareUrl, socialShareText)}
                  target="__blank"
                  width={20}
                  height={20}
                />

                <Icon.Twitter
                  id="twitter-share"
                  width={20}
                  height={20}
                  target="__blank"
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