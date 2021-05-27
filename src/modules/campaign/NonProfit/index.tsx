import { Box, Flex, Text, Image } from '@theme-ui/components'
import { useState, useRef, useEffect } from 'react'
import { NonProfit as NonProfitType } from '../../../types/NonProfit'
import { ChevronDown } from '../../shared/ChevronDown'
import { styles } from './styles'

interface NonProfitProps {
  nonprofit: NonProfitType
}

export const NonProfit = ({ nonprofit }: NonProfitProps): JSX.Element => {
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
      <Flex sx={styles.container}>
        <Flex>
          <Image
            src={nonprofit.img}
            alt="non-profit"
            variant="avatar"
            sx={styles.avatar}
          />
          <Flex sx={styles.textContainer}>
            <Text variant="regular">{nonprofit.name}</Text>
            <Text variant="regular" sx={styles.location}>
              {nonprofit.location}
            </Text>
          </Flex>
        </Flex>
        <ChevronDown
          sx={{
            ...styles.chevron,
            ...(expanded ? styles.rotate : styles.rotateBack)
          }}
          onClick={toggle}
        />
      </Flex>
      <Box
        sx={{ ...styles.aboutContainer, maxHeight: `${height}px` }}
        ref={aboutRef}
      >
        <Text variant="regular" sx={styles.aboutText}>
          {nonprofit.about}
        </Text>
      </Box>
    </>
  )
}
