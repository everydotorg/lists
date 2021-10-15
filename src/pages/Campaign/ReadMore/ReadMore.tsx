import { Text, Button } from 'theme-ui'
import React, { useState } from 'react'

const WORD_COUNT = 50

const trimtext = (text: string) => {
  const words = text.split(' ')

  if (words.length < WORD_COUNT) {
    return [undefined, text]
  }

  return [words.slice(0, WORD_COUNT).join(' ').concat('...'), text]
}

const H2: React.FC = ({ children }) => (
  <Text as="h2" sx={{ color: 'textGray', lineHeight: 1.5 }} variant="regular">
    {children}
  </Text>
)

type ReadMoreProps = {
  text: string
}

export const ReadMore = ({ text }: ReadMoreProps) => {
  const [expanded, setExpanded] = useState(false)

  const [preview, full] = trimtext(text)

  if (preview === undefined) {
    return <H2>{full}</H2>
  }

  return (
    <>
      <H2>{expanded ? full : preview}</H2>

      <Button
        variant="link"
        onClick={() => setExpanded((prev) => !prev)}
        sx={{
          mt: 2,
          fontSize: [2, 2, 3]
        }}
      >
        {expanded ? 'Show less' : 'Show more'}
      </Button>
    </>
  )
}
