import { ChevronDown } from 'src/components/ChevronDown'
import { gtag } from 'src/services/gtag'
import { Box, Flex, Text } from 'theme-ui'
import { styles } from './cardLinkStyles'

type CardLinkProps = {
  title: string
  href: string
}

export const CardLink: React.FC<CardLinkProps> = ({
  title,
  href,
  children
}) => {
  const openLink = () => {
    gtag.pushEvent('open_link', {
      url: href
    })
    window.open(href, '_blank')
  }

  return (
    <Box sx={styles.card} onClick={openLink}>
      <Flex sx={styles.titleContainer}>
        <Text variant="regular" sx={styles.title}>
          {title}
        </Text>
        <Box sx={styles.chevronContainer}>
          <ChevronDown width={14} height={14}></ChevronDown>
        </Box>
      </Flex>
      <Text variant="caption">{children}</Text>
    </Box>
  )
}
