import { useState } from 'react'
import { Flex, Button, ThemeUIStyleObject } from 'theme-ui'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { CopyToClipboard } from '../../shared/CopyToClipboard'
import { About } from '../About'
import { styles } from './styles'

interface BannerButtonsProps {
  sx?: ThemeUIStyleObject
}

export const BannerButtons: React.FC<BannerButtonsProps> = ({ sx = {} }) => {
  const { slug } = useCampaignInfoContext()
  const [showPopup, setShowPopup] = useState(false)
  const shareUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/${slug}`

  return (
    <>
      <Flex sx={{ ...styles.group, ...sx }}>
        <CopyToClipboard
          id="campaign-copylink"
          text={shareUrl}
          sx={styles.linkButton}
          linkCopiedStyle={styles.linkCopied}
          variant="primarySmallInverted"
        >
          giveli.st/<strong>{slug}</strong>
        </CopyToClipboard>

        <Button
          id="open-about"
          variant="primarySmallInverted"
          onClick={() => setShowPopup(true)}
        >
          <span>About</span>
        </Button>
      </Flex>

      {showPopup && <About onClose={() => setShowPopup(false)} />}
    </>
  )
}
