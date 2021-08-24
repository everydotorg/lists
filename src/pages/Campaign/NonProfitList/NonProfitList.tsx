import { Flex, Text } from '@theme-ui/components'
import { Fragment, useCallback, useState } from 'react'
import { NonProfit as NonProfitType } from 'types/NonProfit'
import { gtag } from 'src/services/gtag'
import { Expandable } from 'src/components/Expandable'
import { styles } from './nonProfitListStyles'
import Image from 'next/image'

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
          <Expandable
            expanded={nonprofit.slug === expandedSlug}
            onClick={() => handleClick(nonprofit.slug)}
            autoScroll
            containerStyle={styles.container}
            headerStyle={styles.header}
            renderTitle={
              <Flex>
                <Flex sx={styles.avartarContainer}>
                  <Image
                    quality="100"
                    src={nonprofit.img}
                    alt="non profit image"
                    layout="fill"
                    objectPosition="center"
                    objectFit="cover"
                    className="next-avatar"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO0LQUAAPUAtNYN+AkAAAAASUVORK5CYII="
                  />
                </Flex>

                <Flex sx={styles.textContainer}>
                  <Text variant="heading">
                    <strong>{nonprofit.name}</strong>
                  </Text>
                  <Text variant="medium" sx={styles.location}>
                    {nonprofit.location}
                  </Text>
                </Flex>
              </Flex>
            }
            descriptionStyle={styles.aboutContainer}
            chevronStyle={styles.expandableChevron}
            renderDescription={
              <Text variant="medium" sx={styles.aboutText}>
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
