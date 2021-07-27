import { Box, Flex, Button, Text } from 'theme-ui'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { facebookShare, twitterShare } from 'src/services/url'
import { styles } from './thankYouStyles'
import { Facebook } from 'src/components/Facebook'
import { Twitter } from 'src/components/Twitter'
import { Divider } from 'src/components/Divider'
import { CopyToClipboard } from 'src/components/CopyToClipboard'
import { Card } from './Card'
import { Brand } from 'src/components/Brand'

export const ThankYou = (): JSX.Element | null => {
  const { slug, socialShareText, name } = useCampaignInfoContext()

  const showSignupCard = true // Probably we will get this value from the url
  const shareUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/${slug}`

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
      </Flex>
      <Divider space={[3, 6]} />
      <Flex sx={styles.cardList}>
        {showSignupCard && (
          <Card
            title="Claim your free every.org account"
            description="Save your charitable giving history. Explore, donate, and share."
            renderActions={
              <Flex sx={{ alignItems: 'flex-start' }}>
                <Button onClick={() => console.log()} variant="secondary">
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
              >
                giveli.st/{slug}
              </CopyToClipboard>
              <Flex
                sx={{
                  alignItems: 'stretch',
                  '& > *:not(:last-child)': { mr: 2 }
                }}
              >
                <Facebook
                  variant="buttons.secondaryInverted"
                  as="a"
                  id="facebook-share"
                  href={facebookShare(shareUrl, socialShareText)}
                  target="__blank"
                  width={20}
                  height={20}
                />

                <Twitter
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
              <Button variant="secondaryInverted">Begin survey</Button>
            </Flex>
          }
          inverted
        />
      </Flex>
      <Brand sx={{ flex: 1 }} />
    </Box>
  )
}
