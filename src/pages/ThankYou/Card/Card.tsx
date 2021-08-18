import React from 'react'
import { Text, Flex } from 'theme-ui'
import { styles } from './cardStyles'

interface CardProps {
  title: string
  description: string
  renderActions: React.ReactNode
  inverted?: boolean
}
export const Card = ({
  title,
  description,
  renderActions,
  inverted
}: CardProps) => {
  return (
    <Flex
      sx={{
        ...styles.container,
        ...(inverted ? styles.containerInvertedColor : styles.containerColor)
      }}
    >
      <Text sx={styles.titleText} variant="small">
        <strong>{title}</strong>
      </Text>
      <Text sx={styles.descriptionText}>{description}</Text>
      {renderActions}
    </Flex>
  )
}