import { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import { Flex, Box, ThemeUIStyleObject } from 'theme-ui'
import { ChevronDown, ChevronDownProps } from '../ChevronDown'

interface ExpandableProps {
  renderTitle: React.ReactNode
  renderDescription: React.ReactNode
  descriptionStyle?: ThemeUIStyleObject
  containerStyle?: ThemeUIStyleObject
  headerStyle?: ThemeUIStyleObject
  chevronStyle?: ThemeUIStyleObject
  chevronProps?: Partial<ChevronDownProps>
  space?: number
}

export const Expandable = ({
  renderTitle,
  renderDescription,
  containerStyle = {},
  headerStyle = {},
  descriptionStyle = {},
  chevronStyle = {},
  chevronProps = {},
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
    <Box
      onClick={toggle}
      sx={{
        cursor: 'pointer',
        ...containerStyle
      }}
    >
      <Flex sx={headerStyle}>
        {renderTitle}
        <ChevronDown
          width={20}
          height={10}
          {...chevronProps}
          sx={{
            ...styles.chevron,
            ...chevronStyle,
            ...(expanded ? styles.rotate : {}),
            color: 'primary'
          }}
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
    </Box>
  )
}
