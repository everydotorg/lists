import { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import { Flex, Box, ThemeUIStyleObject } from 'theme-ui'
import { ChevronDown } from '../ChevronDown'

interface ExpandableProps {
  renderTitle: React.ReactNode
  renderDescription: React.ReactNode
  descriptionStyle?: ThemeUIStyleObject
  containerStyle?: ThemeUIStyleObject
  chevronStyle?: ThemeUIStyleObject
  space?: number
}
export const Expandable = ({
  containerStyle,
  descriptionStyle,
  chevronStyle,
  renderTitle,
  renderDescription,
  space = 0
}: ExpandableProps): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [height, setHeight] = useState<number>(0)

  const aboutRef = useRef<HTMLDivElement>(null)

  const toggle = () => setExpanded((prev) => !prev)

  useEffect(
    () => setHeight(expanded ? aboutRef.current?.scrollHeight ?? 0 : 0),
    [expanded]
  )

  return (
    <>
      <Flex sx={containerStyle}>
        {renderTitle}
        <ChevronDown
          width={20}
          height={10}
          sx={{
            ...styles.chevron,
            ...chevronStyle,
            ...(expanded ? styles.rotate : {})
          }}
          onClick={toggle}
        />
      </Flex>
      <Box
        sx={{
          ...styles.aboutContainer,
          ...descriptionStyle,
          ...(expanded ? { mt: space } : {}),
          maxHeight: `${height}px`
        }}
        ref={aboutRef}
      >
        {renderDescription}
      </Box>
    </>
  )
}
