import { styles } from './nonProfitStyles'
import { Box, Text, Flex, Link as RebassLink } from 'theme-ui'
import { HomeNonProfit } from '../../Home'
import { causeTextColor, theme } from 'src/styles/theme'
import { useRouter } from 'next/router'
import { gtag } from 'src/services/gtag'
import Image from 'next/image'

type NonprofitProps = {
  nonprofit: HomeNonProfit
}

const mediaQuery = `@media all and (min-width: ${theme.breakpoints[0]})`

export const Nonprofit = ({ nonprofit }: NonprofitProps) => {
  const textColor = causeTextColor(nonprofit.cause)

  const router = useRouter()

  const hoverStyles = {
    [mediaQuery]: {
      ':hover': {
        borderColor: textColor
      },
      ':hover #nonprofit-image-container': {
        filter: 'none'
      },
      ':hover #nonprofit-link': {
        bg: textColor,
        color: nonprofit.cause
      }
    }
  }

  const toGivelist = () => {
    gtag.pushEvent('campaign_clicked', { campaign: nonprofit.slug })

    router.push(
      {
        pathname: '/[campaign]',
        query: {
          campaign: nonprofit.slug,
          showBackToList: true
        }
      },
      `/${nonprofit.slug}`
    )
  }

  return (
    <Flex
      sx={{
        ...styles.container,
        borderColor: nonprofit.cause,
        backgroundColor: nonprofit.cause,
        ...hoverStyles
      }}
      onClick={toGivelist}
    >
      <Flex
        sx={{
          ...styles.section,
          ...styles.infoSection,
          color: textColor
        }}
      >
        <Flex sx={styles.textContainer}>
          <Text
            variant="title"
            sx={{
              color: textColor
            }}
          >
            {nonprofit.name}
          </Text>
          <Text
            variant="regular"
            sx={{
              ...styles.aboutText,
              color: textColor
            }}
          >
            {nonprofit.about}
          </Text>
        </Flex>

        <Flex sx={styles.buttonLinkContainer}>
          <RebassLink
            variant="button"
            as="span"
            id="nonprofit-link"
            sx={{
              alignSelf: 'flex-start',
              transition: 'background .2s',
              color: textColor
            }}
          >
            <Text as="span" sx={styles.linkText}>
              giveli.st/{nonprofit.slug}
            </Text>
          </RebassLink>
        </Flex>
      </Flex>
      <Flex
        sx={{
          ...styles.section,
          ...styles.imageSection
        }}
      >
        <Box id="nonprofit-image-container" sx={styles.imageContainer}>
          <Image
            src={nonprofit.imageUrl}
            alt={nonprofit.name + ' campaign image'}
            className="next-home-image"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO0LQUAAPUAtNYN+AkAAAAASUVORK5CYII="
          />
        </Box>
      </Flex>
    </Flex>
  )
}
