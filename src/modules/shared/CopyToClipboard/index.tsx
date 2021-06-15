import React, { useState } from 'react'
import { Button, ButtonProps, ThemeUIStyleObject } from 'theme-ui'

type CopyToClipboardProps = {
  text: string
  linkCopiedStyle?: ThemeUIStyleObject
  id: string
} & ButtonProps

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  children,
  sx,
  id,
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
      id={id}
      sx={{ ...sx, ...(linkCopied && linkCopiedStyle ? linkCopiedStyle : {}) }}
      {...props}
      onClick={copy}
    >
      {linkCopied ? 'Link copied' : children}
    </Button>
  )
}
