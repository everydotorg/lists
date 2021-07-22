import { useState } from 'react'
import { Flex, Button, ThemeUIStyleObject } from 'theme-ui'
import { useCampaignInfoContext } from '../../hooks/useCampaignInfoContext'
import { CopyToClipboard } from 'src/components/CopyToClipboard'
import { About } from '../../pages/Campaign/About'
import { styles } from './bannerButtonsStyles'

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
        <Button
          id="open-about"
          variant="primarySmallInverted"
          sx={{
            bg: 'rgba(0, 0, 0, 0.2)',
            color: 'white',
            backdropFilter: 'blur(100px)',
            border: 'none'
          }}
          onClick={() => setShowPopup(true)}
        >
          <span>About giveli.st</span>
        </Button>
      </Flex>

      {showPopup && <About onClose={() => setShowPopup(false)} />}
    </>
  )
}
