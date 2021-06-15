import { Flex, Text, Image } from '@theme-ui/components'
import { NonProfit as NonProfitType } from '../../../types/NonProfit'
import { pushEvent } from '../../../utils/gtag'
import { Expandable } from '../../shared/Expandable'
import { styles } from './styles'

interface NonProfitProps {
  nonprofit: NonProfitType
}

export const NonProfit = ({ nonprofit }: NonProfitProps): JSX.Element => {
  const pushAnalyticEvent = (toggle: boolean) => {
    pushEvent(`${toggle ? 'open' : 'close'}_nonprofit`, {
      name: nonprofit.name
    })
  }

  return (
    <Expandable
      headerStyle={styles.header}
      containerStyle={styles.container}
      onExpand={pushAnalyticEvent}
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
            <Text variant="caption" sx={styles.location}>
              {nonprofit.location}
            </Text>
          </Flex>
        </Flex>
      }
      descriptionStyle={styles.aboutContainer}
      renderDescription={
        <Text variant="small" sx={styles.aboutText}>
          {nonprofit.about}
        </Text>
      }
    />
  )
}
