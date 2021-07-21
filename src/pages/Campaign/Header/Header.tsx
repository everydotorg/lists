import { Box, Image, Flex, Text, Button } from 'theme-ui'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { styles } from './headerStyles'
import { BannerButtons } from 'src/components/BannerButtons'

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
        <BannerButtons />
      </Box>

      <Box sx={styles.desktopContainer}>
        <Flex sx={{ alignItems: 'center' }}>
          <Image variant="avatar" sx={styles.logoDesktop} src={logoUrl} />
          <Text as="h1" variant="h1">
            {name}
          </Text>
        </Flex>
        <Button
          id="campaign-desktop-donate"
          sx={styles.donateButton}
          onClick={onClickDonate}
          variant="primarySmall"
        >
          <span>Donate</span>
        </Button>
      </Box>
    </>
  )
}
