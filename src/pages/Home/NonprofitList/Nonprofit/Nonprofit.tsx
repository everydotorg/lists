import { styles } from './nonProfitStyles'
import { Text, Flex, Box, Link as RebassLink } from 'theme-ui'
import { HomeNonProfit } from '../../Home'
import { causeTextColor } from 'src/styles/theme'
import { useRouter } from 'next/router'

type NonprofitProps = {
  nonprofit: HomeNonProfit
}

export const Nonprofit = ({ nonprofit }: NonprofitProps) => {
  const textColor = causeTextColor(nonprofit.cause)

  const router = useRouter()

  return (
    <Flex
      sx={{
        ...styles.container,
        backgroundColor: nonprofit.cause
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

        <RebassLink
          variant="button"
          as="span"
          sx={{
            alignSelf: 'flex-start',
            color: textColor
          }}
        >
          <span>giveli.st/{nonprofit.slug}</span>
        </RebassLink>
      </Flex>
      <Flex
        sx={{
          ...styles.section,
          ...styles.imageSection
        }}
      >
        <Box
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
