import { Box, Label, Flex, Input as ThemeInput, Text, Link } from 'theme-ui'
import { styles } from './inputStyles'
import { gtag } from 'src/services/gtag'
import React, { useRef, useState } from 'react'
import { useOnClickOutside } from 'src/hooks/useOnClickOutside'
import { Icon } from 'src/components/Icon'
import { Sponsor } from 'types/Sponsor'
import { calcMatching } from 'src/services/utils'
import { useTransition, config, animated } from 'react-spring'
import cubicBezier from 'bezier-easing'
import { matchingMailto } from 'src/services/url'

const amountsToAdd = [20, 40, 100, 200, 500]

const forbiddenSymbols = ['.', ',', '+', '-']

type InputProps = {
  donation: number
  setDonation: React.Dispatch<React.SetStateAction<number>>
  currencySymbol: string
  error: boolean
  setError: React.Dispatch<React.SetStateAction<boolean>>
  sponsor: Sponsor | undefined
  campaign: string
}

export const Input = ({
  donation,
  setDonation,
  currencySymbol,
  error,
  setError,
  sponsor,
  campaign
}: InputProps): JSX.Element => {
  const [matchExpanded, setMatchExpanded] = useState(false)

  const expandableRef = useRef<HTMLDivElement>(null)
  const matchRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(expandableRef, () => setMatchExpanded(false), [matchRef])

  const transition = useTransition(matchExpanded, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    expires: true,
    config: {
      ...config.default,
      duration: 300,
      easing: cubicBezier(0.55, 0.08, 0, 1)
    }
  })

  const AnimatedBox = animated(Box)

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonation(+e.target.value)
    setError(false)
    gtag.pushEvent('donation_amount_changed', {
      type: 'keyboard',
      value: e.target.value
    })
  }

  const addAmount = (amount: number) => {
    gtag.pushEvent('donation_amount_changed', {
      type: 'button',
      amount: amount,
      value: donation + amount
    })
    setError(false)
    setDonation((prev) => prev + amount)
  }

  return (
    <Flex sx={styles.container}>
      <Label
        sx={{ ...styles.label, color: error ? 'error' : '' }}
        htmlFor="donationAmount"
        variant="text.small"
      >
        {error
          ? 'Please donate at least $10 for efficiency'
          : 'How much to donate?'}
      </Label>

      <Flex
        sx={{
          ...styles.sectionsContainer,
          ...(error ? styles.sectionsContainerError : {})
        }}
      >
        <Flex sx={styles.inputSection}>
          <Flex sx={styles.decoratorContainer}>
            <Text variant="input" sx={styles.decoratorText}>
              {currencySymbol}
            </Text>
          </Flex>
          <ThemeInput
            value={donation ? donation : undefined}
            id="donationAmount"
            type="number"
            onKeyDown={(event) => {
              if (forbiddenSymbols.includes(event.key)) {
                event.preventDefault()
              }
            }}
            onChange={inputChange}
            pattern="[0-9]*"
            inputMode="numeric"
            min={0}
            step={1}
            sx={{
              ...styles.input,
              ...styles.inputNumber,
              ...(error ? styles.inputError : {})
            }}
          />
        </Flex>

        {sponsor && (
          <>
            <Box sx={styles.plusSection}>+</Box>
            <Flex
              sx={styles.matchDonationSection}
              onClick={() => setMatchExpanded((prev) => !prev)}
              ref={matchRef}
            >
              <Flex sx={styles.matchContent}>
                <Text sx={styles.matchText}>
                  ${calcMatching(donation, sponsor.threshold) ?? 0} / $
                  {sponsor.threshold}{' '}
                  <Text sx={{ color: 'textGray' }}>matched</Text>
                </Text>
                <Icon.ChevronDown
                  sx={{
                    ...styles.chevron,
                    ...(matchExpanded ? styles.chevronRotated : {})
                  }}
                  width={16}
                  height={10}
                />
              </Flex>
            </Flex>
          </>
        )}
      </Flex>

      {sponsor && (
        <Box sx={{ position: 'relative', height: 0 }}>
          {transition(
            (style, show) =>
              show && (
                <AnimatedBox
                  style={style}
                  sx={styles.expandableBox}
                  ref={expandableRef}
                >
                  <Text>
                    {sponsor.description} Want to donate and increase the match
                    pool? <Link href={matchingMailto(campaign)}>Email us.</Link>
                  </Text>
                </AnimatedBox>
              )
          )}
        </Box>
      )}

      <Flex sx={styles.addAmountContainer}>
        {amountsToAdd.map((amount) => (
          <Text
            sx={styles.addAmountText}
            role="button"
            variant="caption"
            key={amount}
            onClick={() => addAmount(amount)}
          >
            <span>+{amount}</span>
          </Text>
        ))}
      </Flex>
    </Flex>
  )
}
