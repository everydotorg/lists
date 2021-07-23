import { styles } from './nonProfitStyles'
import { Text, Flex, Box, Link } from 'theme-ui'
import { HomeNonProfit } from '../Home'
import { causeTextColor } from 'src/styles/theme'

type NonprofitProps = {
  nonprofit: HomeNonProfit
}

export const Nonprofit = ({ nonprofit }: NonprofitProps) => {
  const textColor = causeTextColor(nonprofit.cause)

  return (
    <Flex
      sx={{
        ...styles.container,
        backgroundColor: nonprofit.cause
      }}
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
        <Link
          variant="button"
          href={`/${nonprofit.slug}`}
          sx={{
            alignSelf: 'flex-start',
            color: textColor
          }}
        >
          giveli.st/{nonprofit.slug}
        </Link>
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
            backgroundImage: `url(${nonprofit.imageUrl})`
          }}
        />
      </Flex>
    </Flex>
  )
}
