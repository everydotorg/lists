import { Text, Button } from 'theme-ui'
import React, { useEffect, useRef, useState } from 'react'
import { useResponsiveValue } from '@theme-ui/match-media'
import { styles } from './readMoreStyles'

export const ReadMore: React.FC = ({ children }) => {
  const [expanded, setExpanded] = useState(false)
  const [overflows, setOverflows] = useState(false)

  const expandableRef = useRef<HTMLHeadingElement>(null)

  const clamp = useResponsiveValue(['4', '6', '6'])

  const overflowHeight = useResponsiveValue(
    // clamp (lines) * font-size * line-height
    [4 * 16 * 1.5, 6 * 16 * 1.5, 6 * 20 * 1.5]
  )

  useEffect(() => {
    const el = expandableRef.current

    if (el) {
      setOverflows(el.scrollHeight > overflowHeight)
    }
  }, [overflowHeight])

  return (
    <>
      <Text
        ref={expandableRef}
        as="h2"
        sx={{
          color: 'textGray',
          // clamp "as number" because if it's actually a number, theme-ui interprets it as px
          ...styles.expandable(overflows, expanded, clamp as unknown as number)
        }}
        variant="regular"
      >
        {children}
      </Text>

      {overflows && (
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
      )}
    </>
  )
}
