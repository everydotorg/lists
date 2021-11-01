import { Icon } from 'src/components/Icon'
import { theme } from 'src/styles/theme'
import { Box, Button, Flex, Link, Text, ThemeProvider } from 'theme-ui'
import { styles } from './fallGivingChallengeStyles'

const Header = () => {
  return (
    <Flex
      as="header"
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 4,
        bg: 'landingChallenge',
        color: 'white',
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1
      }}
    >
      <Text sx={{ fontSize: ['1.25rem', '2.25rem'] }} variant="title">
        #FallGivingChallenge
      </Text>
      <Button variant="landingChallenge" onClick={() => null}>
        Explore lists
      </Button>
    </Flex>
  )
}

type AmountProps = { title: string; amount: string; big?: boolean }
const Amount = ({ title, amount, big = false }: AmountProps) => (
  <Flex
    sx={{
      flexDirection: 'column',
      gap: [3, 6],
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text sx={styles.smallText}>{title}</Text>
    <Text
      sx={{
        ...styles.borderedText,
        fontSize: big ? [9, 10] : ['2rem', '3rem'],
        lineHeight: 1,
        fontWeight: 'bold'
      }}
    >
      {amount}
    </Text>
  </Flex>
)

const ArrowDown = () => (
  <Box sx={{ pb: [10, 12] }}>
    <Icon.BigArrowDown />
  </Box>
)

export const FallGivingChallenge = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box as="main" sx={{ bg: 'landingChallenge', color: 'white', pt: 12 }}>
        <Text sx={styles.heading} as="h1">
          Your donation matched this November 2021
        </Text>
        <Flex as="section" sx={styles.section}>
          <ArrowDown />
          <Flex
            sx={{
              flexDirection: 'column',
              '& > *:not(:last-child)': { mb: [4, 7] }
            }}
          >
            <Text sx={styles.borderedText}>
              This November, donations made via Givelist will be{' '}
              <strong>matched 1:1</strong> up to <strong>$100</strong> per list
              while funds last!
            </Text>
            <Text sx={styles.borderedText}>
              We are hoping to give away <strong>$250,000</strong> before the
              end of <strong>November</strong> and we need your help.
            </Text>
            <Text sx={styles.borderedText}>
              Create and share your own Givelist, help us spread the word and
              raise as much money for as many nonprofits as we can this fall!
            </Text>
          </Flex>
        </Flex>

        <Flex sx={styles.section} as="section">
          <ArrowDown />
          <Button variant="landingChallenge" sx={styles.bigButton}>
            Create your own Givelist
          </Button>
          <Text
            sx={{
              fontSize: '24px',
              lineHeight: 1.25,
              color: 'white',
              textAlign: 'center',
              mt: 10
            }}
          >
            We will make you your very own Givelist with a unique link you can
            share with your friends and followers to use to encourage them to
            donate to your recommended nonprofits.
          </Text>
        </Flex>

        <Flex sx={styles.section} as="section">
          <ArrowDown />
          <Text sx={styles.title}>
            Starting November 1, your donation made to any Givelist will be
            matched 1:1 up to $100.
          </Text>
          <Flex sx={{ '& > *:not(:last-child)': { mr: [4, 7] }, mb: 10 }}>
            <Amount title="You" amount="$100" />
            <Amount title="Us" amount="$100" />
          </Flex>
          <Amount title="Total Donation" amount="$200" big />
          <Text
            sx={{
              ...styles.smallText,
              textAlign: 'center',
              mt: 10
            }}
          >
            A donor can support multiple Givelist's and nonprofits. The first
            donation they make to each of those nonprofits will be matched.{' '}
            <Link
              href="https://docs.google.com/document/d/1bAd84goPWn8YgQry8vfgugNs9gBy9NQYZHXW2jDgTkM"
              target="_blank"
              sx={{ textDecoration: 'underline', color: 'currentcolor' }}
            >
              Review the full terms and conditions here
            </Link>
          </Text>
        </Flex>

        <Flex as="section" sx={styles.section}>
          <ArrowDown />
          <Text sx={styles.title}>Thanks to Our Donors</Text>
          <Text sx={styles.borderedText}>
            Matching funds are provided by generous donors who contribute to
            help amplify grassroots giving. If you would like to contribute to
            future campaigns like <strong>#FallGivingChallenge</strong>, you can
            donate at 
            <Link
              href="https://every.org/matching"
              target="_blank"
              sx={{ textDecoration: 'underline', color: 'currentcolor' }}
            >
              every.org/matching
            </Link>
          </Text>
        </Flex>

        <Flex as="section" sx={styles.section}>
          <ArrowDown />
          <Text sx={styles.title}>No Platform Fees</Text>
          <Box
            sx={{
              ...styles.borderedText,
              ...styles.smallText,
              '& > span': {
                display: 'block'
              },
              '& > span:first-of-type': {
                mb: [4, 7]
              }
            }}
          >
            <Text>
              Givelist is created by Every.org, a nonprofit building accessible
              giving infrastructure supported entirely by donors including
              Camp.org and Gates Foundation; we do not charge any platform fees
              of our own, and 100% of the matching funds will go to nonprofits.
            </Text>
            <Text>
              Payment transaction fees charged by third party vendors will
              apply. For all donations using a bank account, 100% reaches
              nonprofits. Other payment methods have varying third party fees,
              usually 2.2% + $0.30 for Visa, Mastercard, or PayPal and if
              applicable 2.25% for disbursements through Network for Good. See
              more details at third party fees
            </Text>
          </Box>
        </Flex>

        <Flex as="section" sx={styles.section}>
          <ArrowDown />
          <Link
            href="https://giveli.st"
            variant="buttons.landingChallenge"
            sx={styles.bigButton}
          >
            Discover more Givelists
          </Link>
        </Flex>
      </Box>
    </ThemeProvider>
  )
}
