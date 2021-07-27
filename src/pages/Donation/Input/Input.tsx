import { Label, Flex, Input as ThemeInput, Text } from 'theme-ui'
import { styles } from './inputStyles'
import { gtag } from 'src/services/gtag'
import React from 'react'

const amountsToAdd = [20, 40, 80, 200, 500]

interface InputProps {
  donation: number
  setDonation: React.Dispatch<React.SetStateAction<number>>
  currencySymbol: string
  error: boolean
  setError: React.Dispatch<React.SetStateAction<boolean>>
}

export const Input = ({
  donation,
  setDonation,
  currencySymbol,
  error,
  setError
}: InputProps): JSX.Element => {
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

    setDonation((prev) => prev + amount)
  }

  return (
    <Flex sx={styles.container}>
      <Label
        sx={{ ...styles.label, color: error ? 'error' : '' }}
        htmlFor="donationAmount"
        variant="text.small"
      >
        {error ? 'Please donate more than $10 USD' : 'How much to donate?'}
      </Label>
      <Flex sx={styles.inputContainer}>
        <Flex sx={styles.currencyContainer}>
          <Text variant="input">{currencySymbol}</Text>
        </Flex>
        <ThemeInput
          value={donation ? donation : undefined}
          id="donationAmount"
          type="number"
          onChange={inputChange}
          min={0}
          sx={{ ...styles.inputNumber, ...(error ? styles.inputError : {}) }}
          placeholder="Enter amount in USD"
        />
      </Flex>
      <Flex sx={styles.addAmountContainer}>
        {amountsToAdd.map((amount) => (
          <Text
            sx={styles.addAmountText}
            role="button"
            variant="caption"
            key={amount}
            onClick={() => addAmount(amount)}
          >
            +{amount}
          </Text>
        ))}
      </Flex>
    </Flex>
  )
}
