import Image from 'next/image'
import { useRouter } from 'next/router'
import { gtag } from 'src/services/gtag'
import { currencyFormatter } from 'src/services/utils'
import { causeCategoryPalette } from 'src/styles/causeCategoryPalette'
import { theme } from 'src/styles/theme'
import { Box, Flex, Link as RebassLink, Text } from 'theme-ui'
import { HomeNonProfit } from '../../Home'
import { styles } from './nonProfitStyles'

type NonprofitProps = {
  nonprofit: HomeNonProfit
}

const mediaQuery = `@media all and (min-width: ${theme.breakpoints[0]})`

export const Nonprofit = ({ nonprofit }: NonprofitProps) => {
  const causeColor = causeCategoryPalette[nonprofit.cause]

  const router = useRouter()

  const hoverStyles = {
    [mediaQuery]: {
      ':hover': {
        borderColor: causeColor.extraDark
      },
      ':hover #nonprofit-image-container': {
        filter: 'none'
      },
      ':hover #nonprofit-link': {
        bg: causeColor.extraDark,
        color: causeColor.pastel20
      }
    }
  }

  const toList = () => {
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

  const causeNonprofitLogos = nonprofit.nonprofits?.map((n) => n.img)

  return (
    <Flex
      sx={{
        ...styles.container,
        borderColor: causeColor.pastel40,
        ...hoverStyles
      }}
      onClick={toList}
    >
      <Flex
        sx={{
          ...styles.section,
          ...styles.infoSection,
          color: causeColor.extraDark
        }}
      >
        <Flex sx={styles.textContainer}>
          <Text variant="title" sx={{ color: causeColor.extraDark }}>
            {nonprofit.name}
          </Text>
          <Flex sx={{ mt: 2, mb: 4 }}>
            <Text
              sx={{
                color: causeColor.extraDark,
                mr: 6,
                fontSize: 2
              }}
            >
              <strong>{nonprofit.nonprofits?.length}</strong> nonprofits
            </Text>
            {nonprofit.sponsor?.upTo ? (
              <Text sx={{ fontSize: 2, lineHeight: '20px' }}>
                <strong>
                  {currencyFormatter.format(nonprofit.sponsor.upTo)}
                </strong>{' '}
                in matching
              </Text>
            ) : null}
          </Flex>
          <Text
            variant="regular"
            sx={{ ...styles.aboutText, color: causeColor.extraDark }}
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
              color: causeColor.extraDark,
              bg: causeColor.pastel20
            }}
          >
            <Text as="span" sx={styles.linkText}>
              every.org/lists/{nonprofit.slug}
            </Text>
          </RebassLink>
        </Flex>
      </Flex>
      <Box
        sx={{
          ...styles.section,
          ...styles.imageSection
        }}
      >
        <Box id="nonprofit-image-container" sx={styles.imageContainer}>
          {nonprofit.imageUrl && (
            <Image
              src={nonprofit.imageUrl}
              quality={45}
              sizes="(max-width: 900px) 100vw, 20vw"
              // disable lazy loading from next/image and user browser's built-in
              loading="eager"
              alt={nonprofit.name + ' campaign image'}
              className="next-home-image"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO0LQUAAPUAtNYN+AkAAAAASUVORK5CYII="
            />
          )}
        </Box>
        <Flex sx={styles.logosSection}>
          {causeNonprofitLogos?.map((imgUrl) => (
            <Box sx={styles.logoContainer}>
              <Image
                src={imgUrl}
                quality={45}
                // disable lazy loading from next/image and user browser's built-in
                loading="eager"
                className="next-home-nonprofit-logo"
                width={32}
                height={32}
                objectFit="cover"
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}
