import React, { useState } from 'react'
import { Button, ButtonProps, ThemeUIStyleObject } from 'theme-ui'
import { Icon } from '../Icon'
import { styles } from './copyToClipboardStyles'
import clipboardCopy from 'clipboard-copy'

type CopyToClipboardProps = {
  id: string
  text: string
  linkCopiedStyle?: ThemeUIStyleObject
  iconSize?: 'small' | 'default'
} & ButtonProps

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  children,
  sx,
  id,
  linkCopiedStyle,
  iconSize = 'default',
  ...props
}) => {
  const [linkCopied, setLinkCopied] = useState(false)

  const copy = () => {
    clipboardCopy(text)
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 2000)
  }

  const svgSize = iconSize === 'default' ? 24 : 16

  return (
    <Button
      id={id}
      sx={{
        ...styles.button,
        ...sx,
        ...(linkCopied && linkCopiedStyle ? linkCopiedStyle : {})
      }}
      {...props}
      onClick={copy}
    >
      <span>{linkCopied ? 'Link copied' : children}</span>
      <Icon.Link width={svgSize} height={svgSize} />
    </Button>
  )
}
