import Head from 'next/head'
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
      <Link href="/">
        <Button variant="landingChallenge" onClick={() => null}>
          Explore lists
        </Button>
      </Link>
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
      <Head>
        <title>#FallGivingChallenge</title>
        <meta property="og:title" content="#FallGivingChallenge 🍁🍁🍁" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/everydotorg/image/upload/c_lfill,h_500/q_auto,f_auto,fl_progressive/profile_pics/q3qqtt1vwlkgqtkowtci"
        />
        <meta
          property="og:description"
          content="Help give away $475,000 to charity this November! Your first donation made via Givelist will be matched 1:1 up to $100, while funds last."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
              <strong>matched 1:1</strong> up to <strong>$100</strong> while
              funds last!
            </Text>
            <Text sx={styles.borderedText}>
              We are hoping to give away <strong>$475,000</strong> before the
              end of <strong>November</strong> and we need your help.
            </Text>
            <Text sx={styles.borderedText}>
              Create and share your own Givelist, help us spread the word and
              raise as much money for as many charities as we can this fall!
            </Text>
          </Flex>
        </Flex>

        <Flex sx={styles.section} as="section">
          <ArrowDown />
          <Link href="https://forms.gle/dWCGgbm7NX4Ln8BP7" target="_blank">
            <Button variant="landingChallenge" sx={styles.bigButton}>
              Create your own Givelist
            </Button>
          </Link>
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
            This November, your first donation to each Givelist will be matched
            1:1 up to $100.
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
            A donor can give to as many Givelist's as they want and be matched
            up to $100 per list, while funds last. If someone makes two $50
            donations to the same list, then only the first $50 would be
            matched. If someone makes a $1000 donation, then only the first $100
            is matched.{' '}
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
              applicable 2.25% for disbursements through Network for Good.
            </Text>
          </Box>
        </Flex>

        <Flex as="section" sx={styles.section}>
          <ArrowDown />
          <Link
            href="/"
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
