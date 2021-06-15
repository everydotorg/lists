import React, { useState } from 'react'
import { Button, ButtonProps, ThemeUIStyleObject } from 'theme-ui'

type CopyToClipboardProps = {
  text: string
  linkCopiedStyle?: ThemeUIStyleObject
} & ButtonProps

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  children,
  sx,
  linkCopiedStyle,
  ...props
}) => {
  const [linkCopied, setLinkCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(text)
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 2000)
  }

  return (
    <Button
      sx={{ ...sx, ...(linkCopied && linkCopiedStyle ? linkCopiedStyle : {}) }}
      {...props}
      onClick={copy}
    >
      {linkCopied ? 'Link copied' : children}
    </Button>
  )
}
