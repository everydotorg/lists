import { Flex, Text, Image } from '@theme-ui/components'
import { NonProfit as NonProfitType } from '../../../types/NonProfit'
import { Expandable } from '../../shared/Expandable'
import { styles } from './styles'

interface NonProfitProps {
  nonprofit: NonProfitType
}

export const NonProfit = ({ nonprofit }: NonProfitProps): JSX.Element => {
  return (
    <Expandable
      containerStyle={styles.container}
      renderTitle={
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
      }
      descriptionStyle={styles.aboutContainer}
      renderDescription={
        <Text variant="regular" sx={styles.aboutText}>
          {nonprofit.about}
        </Text>
      }
    />
  )
}
