import { Box, Image, Flex, Text, Button } from 'theme-ui'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { styles } from './styles'

interface HeaderProps {
  onClickDonate: () => void
}
export const Header = ({ onClickDonate }: HeaderProps): JSX.Element => {
  const { backgroundImageUrl, logoUrl, name } = useCampaignInfoContext()

  return (
    <>
      <Box
        sx={{
          ...styles.container,
          backgroundImage: `url(${backgroundImageUrl})`
        }}
      >
        <Image sx={styles.logo} src={logoUrl} />
      </Box>

      <Box sx={styles.desktopContainer}>
        <Flex sx={{ alignItems: 'center' }}>
          <Image sx={styles.logoDesktop} src={logoUrl} />
          <Text variant="title">{name}</Text>
        </Flex>
        <Button onClick={onClickDonate} variant="primarySmall">
          Donate
        </Button>
      </Box>
    </>
  )
}