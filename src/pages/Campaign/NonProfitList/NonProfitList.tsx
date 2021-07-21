import { Flex, Text, Image } from '@theme-ui/components'
import { Fragment, useCallback, useState } from 'react'
import { NonProfit as NonProfitType } from 'types/NonProfit'
import { gtag } from 'src/services/gtag'
import { Divider } from 'src/components/Divider'
import { Expandable } from 'src/components/Expandable'
import { styles } from './nonProfitListStyles'

interface NonProfitProps {
  list: NonProfitType[]
}

export const NonProfitList: React.FC<NonProfitProps> = ({ list }) => {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)

  const handleClick = (slug: string) =>
    setExpandedSlug((curr) => {
      return curr === slug ? null : slug
    })

  const pushAnalyticEvent = useCallback((name: string, expanded: boolean) => {
    gtag.pushEvent(`${expanded ? 'open' : 'close'}_nonprofit`, {
      name: name
    })
  }, [])

  return (
    <>
      {list.map((nonprofit) => (
        <Fragment key={nonprofit.slug}>
          <Divider space={0} color="muted" />
          <Expandable
            expanded={nonprofit.slug === expandedSlug}
            onClick={() => handleClick(nonprofit.slug)}
            autoScroll
            containerStyle={styles.container}
            headerStyle={styles.header}
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
            onExpand={pushAnalyticEvent}
            id={nonprofit.name}
          />
        </Fragment>
      ))}
    </>
  )
}
