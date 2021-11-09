import { Box, Button, Flex, Text } from '@theme-ui/components'
import Image from 'next/image'
import { Fragment, useCallback, useState } from 'react'
import { Expandable } from 'src/components/Expandable'
import { useAboutModal } from 'src/hooks/useAboutModal'
import { gtag } from 'src/services/gtag'
import { NonProfit as NonProfitType } from 'types/NonProfit'
import { styles } from './nonProfitListStyles'

interface NonProfitProps {
  list: NonProfitType[]
}

export const NonProfitList: React.FC<NonProfitProps> = ({ list }) => {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)
  const aboutModal = useAboutModal()

  const handleClick = (slug: string) =>
    setExpandedSlug((curr) => {
      return curr === slug ? null : slug
    })

  const openAbout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    aboutModal.setOpen(true)
  }

  const pushAnalyticEvent = useCallback((name: string, expanded: boolean) => {
    gtag.pushEvent(`${expanded ? 'open' : 'close'}_nonprofit`, {
      name: name
    })
  }, [])

  return (
    <>
      <Expandable
        id="info"
        expanded={expandedSlug === 'info'}
        onClick={() => handleClick('info')}
        containerStyle={styles.container}
        headerStyle={styles.header}
        descriptionStyle={styles.aboutContainer}
        chevronStyle={styles.expandableChevron}
        renderTitle={
          <Text variant="caption" sx={styles.nonprofitsTitle}>
            Donation <strong>split evenly</strong> between{' '}
            <strong>{list.length}</strong> charities:
          </Text>
        }
        renderDescription={
          <Box>
            <Text as="p" variant="caption" sx={{ color: 'text', my: [4, 6] }}>
              Your donation is made to Every.org, a tax-exempt US 501(c)(3)
              charity that grants funds to these {list.length} charities on your
              behalf, without taking any cut of the donation.
            </Text>
            <Button onClick={openAbout} variant="gray">
              Learn more
            </Button>
          </Box>
        }
      />
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
                  {nonprofit.img && (
                    <Image
                      src={nonprofit.img}
                      quality={45}
                      sizes="(max-width: 900px) 2.5rem, 4rem"
                      // disable lazy loading from next/image and user browser's built-in
                      loading="eager"
                      alt="non profit image"
                      layout="fill"
                      objectPosition="center"
                      objectFit="cover"
                      className="next-avatar"
                    />
                  )}
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
