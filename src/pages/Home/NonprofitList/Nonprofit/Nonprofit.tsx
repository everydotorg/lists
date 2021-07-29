import { styles } from './nonProfitStyles'
import { Box, Text, Flex, Link as RebassLink } from 'theme-ui'
import { HomeNonProfit } from '../../Home'
import { causeTextColor, theme } from 'src/styles/theme'
import { useRouter } from 'next/router'
import { gtag } from 'src/services/gtag'

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
      ':hover #nonprofit-image': {
        filter: 'none'
      },
      ':hover #nonprofit-link': {
        bg: textColor,
        color: nonprofit.cause
      }
    }
  }
  const pushEvent = (campaign: string) => {
    gtag.pushEvent('campaign_clicked', { campaign })
  }

  return (
    <Flex
      sx={{
        ...styles.container,
        borderColor: nonprofit.cause,
        backgroundColor: nonprofit.cause,
        ...hoverStyles
      }}
      onClick={() =>
        router.push(
          {
            pathname: '/[campaign]',
            query: {
              campaign: nonprofit.slug,
              showBackToExamples: true
            }
          },
          `/${nonprofit.slug}`
        )
      }
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
            onClick={() => pushEvent(nonprofit.slug)}
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
        <Box
          id="nonprofit-image"
          sx={{
            ...styles.image,
            ...styles.imageFilters,
            backgroundImage: `url(${nonprofit.imageUrl})`
          }}
        />
      </Flex>
    </Flex>
  )
}
