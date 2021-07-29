import { styles } from './aboutStyles'
import { Divider } from 'src/components/Divider'
import { Box, Text } from 'theme-ui'
import { CardLink } from './CardLink/CardLink'

export const About = () => {
  return (
    <>
      <Box sx={styles.textContainer}>
        <Text variant="regular" sx={styles.text}>
          With so many worthy causes and nonprofits, it’s daunting for most
          people to know where to direct their charitable giving. Givelist aims
          to address this challenge by providing people with a platform to
          highlight the nonprofits they love, share them with their communities
          online, and have the ability to donate to a list of recommended
          nonprofits all in one place.
        </Text>

        <Text variant="regular" sx={styles.text}>
          Givelist handles the entire giving experience, from payment step, tax
          receipt, and payout to each of the nonprofits.
        </Text>
      </Box>

      <Divider space={4} />

      <Box sx={styles.creditsContainer}>
        <Text variant="caption" sx={{ display: 'block' }}>
          Credits
        </Text>

        <CardLink title="Powered by Every.org" href="https://every.org">
          A registered 501(c)(3) nonprofit on a mission to provide free
          technologies and tools that encourage individuals to take action and
          spread generosity
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
