import { styles } from './aboutStyles'
import { Divider } from 'src/components/Divider'
import { Box, Text } from 'theme-ui'
import { CardLink } from './CardLink/CardLink'

export const everyOrgDescription =
  '501(c)(3) charity building an accessible giving infrastructure to help every person and organization do more good.'

export const About = () => {
  return (
    <>
      <Box sx={styles.textContainer}>
        <Text variant="regular" sx={styles.text}>
          Givelist provides people with a platform to highlight the nonprofits
          they love, share them with their communities online, and have the
          ability to donate to a list of recommended nonprofits all in one
          place.
        </Text>

        <Text variant="regular" sx={styles.text}>
          If you use a bank account, then 100% of your donation reaches
          nonprofits. Your gift will be evenly split among all the nonprofits on
          the list. This can be more efficient than making many small donations
          directly by avoiding transaction fees.
        </Text>

        <Text variant="regular" sx={styles.text}>
          Givelist and Every.org handle the entire giving experience, from
          payment step, tax receipt, and payout to each of the nonprofits, all
          at no cost.
        </Text>
      </Box>

      <Divider space={4} />

      <Box sx={styles.creditsContainer}>
        <Text variant="caption" sx={{ display: 'block' }}>
          Credits
        </Text>

        <CardLink
          title="Powered by Every.org"
          href="https://every.org?utm_source=givelist"
        >
          A {everyOrgDescription}
        </CardLink>

        <CardLink title="Made by p22.studio" href="https://p22.studio">
          A digital design and development studio.
        </CardLink>

        <CardLink
          title="Original concept"
          href="https://www.bettergivingstudio.com/product-concept/givelist"
        >
          Better Giving Studio. Licensed under CC BY 4.0.
        </CardLink>
      </Box>
    </>
  )
}
