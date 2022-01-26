import { Card } from '../Card'
import React, { useEffect, useState } from 'react'
import { Flex, Link } from 'theme-ui'
import { CopyToClipboard } from '../CopyToClipboard'
import { useCampaignInfoContext } from 'src/hooks/useCampaignInfoContext'
import { Icon } from '../Icon'
import { baseUrlWithPaths, facebookShare, twitterShare } from 'src/services/url'

export const ShareCard = () => {
  const { slug, name, socialShareText } = useCampaignInfoContext()

  const shareApi =
    typeof window !== 'undefined' && typeof navigator.share === 'function'

  const [shareUrl, setShareUrl] = useState('')

  useEffect(() => {
    setShareUrl(baseUrlWithPaths(slug))
  }, [slug])

  const socialMediaShareText = `Please support ${name}. ${socialShareText}`

  const mailtoHref = `mailto:?subject=Please support ${name}&body=${socialShareText} ${shareUrl}`

  return (
    <Card
      title={`Share this list`}
      description="Turn this moment into a movement by texting or emailing friends, setting your link in bio, and sharing to social media."
      renderActions={
        <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <CopyToClipboard
            id="thankyou-copylink"
            text={shareUrl}
            as="a"
            variant="secondaryInverted"
            type="button"
            iconSize="small"
            sx={{
              flexBasis: 0,
              flexGrow: 1,
              maxWidth: 'max-content',
              mr: 2
            }}
          >
            list.every.org/{slug}
          </CopyToClipboard>
          <Flex
            sx={{
              alignItems: 'stretch',
              '& > *:not(:last-child)': { mr: 2 }
            }}
          >
            <Icon.Envelope
              variant="buttons.secondaryInverted"
              as="a"
              id="email-share"
              href={mailtoHref}
              target="_blank"
              width={20}
              height={20}
            />
            <Icon.Facebook
              variant="buttons.secondaryInverted"
              as="a"
              id="facebook-share"
              href={facebookShare(shareUrl, socialMediaShareText)}
              target="_blank"
              width={20}
              height={20}
            />
            <Icon.Twitter
              id="twitter-share"
              width={20}
              height={20}
              target="_blank"
              variant="buttons.secondaryInverted"
              href={twitterShare(shareUrl, socialMediaShareText)}
            />
            {shareApi && (
              <Link
                onClick={() =>
                  navigator
                    .share({
                      url: shareUrl,
                      text: socialMediaShareText
                    })
                    .catch(() => null)
                }
                variant="buttons.secondaryInverted"
              >
                <Icon.DotsHorizontal />
              </Link>
            )}
          </Flex>
        </Flex>
      }
      inverted
    />
  )
}
