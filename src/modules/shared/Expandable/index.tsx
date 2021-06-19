import React, { useCallback, useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import { Flex, Box, ThemeUIStyleObject } from 'theme-ui'
import { ChevronDown, ChevronDownProps } from '../ChevronDown'
import { useScrollToElement } from '../../../hooks/useScrollToElement'
import { isMobile } from 'react-device-detect'

interface ExpandableProps {
  expanded: boolean
  onClick: () => void
  renderTitle: React.ReactNode
  renderDescription: React.ReactNode
  descriptionStyle?: ThemeUIStyleObject
  containerStyle?: ThemeUIStyleObject
  headerStyle?: ThemeUIStyleObject
  chevronStyle?: ThemeUIStyleObject
  chevronProps?: Partial<ChevronDownProps>
  onExpand?: (id: string, open: boolean) => void
  id?: string
  space?: number
  autoScroll?: boolean
}

export const Expandable = React.memo(
  ({
    expanded,
    onClick,
    renderTitle,
    renderDescription,
    autoScroll = false,
    containerStyle = {},
    headerStyle = {},
    descriptionStyle = {},
    chevronStyle = {},
    chevronProps = {},
    space = 0,
    onExpand,
    id
  }: ExpandableProps): JSX.Element => {
    const [height, setHeight] = useState<number>(0)
    const isFirstRun = useRef(true)
    const aboutRef = useRef<HTMLDivElement>(null)
    const endDescriptionRef = useRef<HTMLDivElement>(null)
    const scrollToElement = useScrollToElement(endDescriptionRef)

    useEffect(
      () => setHeight(expanded ? aboutRef.current?.scrollHeight ?? 0 : 0),
      [expanded]
    )

    useEffect(() => {
      setHeight(expanded ? aboutRef.current?.scrollHeight ?? 0 : 0)

      if (expanded && autoScroll) {
        const timeout = setTimeout(
          () =>
            isMobile
              ? scrollToElement()
              : aboutRef.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest'
                }),
          550 // the duration of the animation
        )

        return () => clearTimeout(timeout)
      }

      return () => null
    }, [expanded, autoScroll, scrollToElement])

    const onExpandMemoized = useCallback(() => {
      if (isFirstRun.current) {
        isFirstRun.current = false
        return
      }

      if (onExpand && id) {
        onExpand(id, expanded)
      }
    }, [id, expanded, onExpand])

    useEffect(() => {
      onExpandMemoized()
    }, [onExpandMemoized])

    return (
      <Box
        onClick={onClick}
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
              color: 'primary',
              ...chevronStyle,
              ...(expanded ? styles.rotate : {})
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
          <div ref={endDescriptionRef}></div>
        </Box>
      </Box>
    )
  }
)
