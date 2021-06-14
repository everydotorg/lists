import { Label, Flex, Input as ThemeInput, Text, Select } from 'theme-ui'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'
import { Currency } from '../../../types/Currency'
import { ChevronDown } from '../../shared/ChevronDown'
import { styles } from './styles'

const amountsToAdd = [10, 20, 50, 100]

interface InputProps {
  donation: number
  setDonation: React.Dispatch<React.SetStateAction<number>>
  currencySymbol: string
  setCurrency: React.Dispatch<React.SetStateAction<Currency>>
}

export const Input = ({
  donation,
  setDonation,
  currencySymbol,
  setCurrency
}: InputProps): JSX.Element => {
  const { currenciesSupported } = useCampaignInfoContext()

  return (
    <Flex sx={styles.container}>
      <Label sx={styles.label} htmlFor="donationAmount" variant="text.title">
        How much to donate?
      </Label>
      <Flex sx={styles.donationContainer}>
        <Flex sx={styles.inputContainer}>
          <Text variant="input" sx={styles.currencySymbol}>
            {currencySymbol}
          </Text>
          <ThemeInput
            value={donation ? donation : undefined}
            id="donationAmount"
            type="number"
            defaultValue="75"
            sx={styles.inputNumber}
            onChange={(e) => setDonation(+e.target.value)}
            min={0}
          />
        </Flex>
        <Flex sx={styles.selectContainer}>
          {currenciesSupported && currenciesSupported.length > 0 && (
            <Select
              onChange={(e) => setCurrency(e.target.value as Currency)}
              arrow={
                <ChevronDown
                  width={20}
                  height={10}
                  sx={styles.selectArrow}
                  inverted
                />
              }
            >
              {currenciesSupported.map((c) => (
                <option>{c}</option>
              ))}
            </Select>
          )}
        </Flex>
      </Flex>
      <Flex sx={styles.addAmountContainer}>
        {amountsToAdd.map((amount) => (
          <Text
            sx={styles.addAmountText}
            role="button"
            variant="title"
            key={amount}
            onClick={() => setDonation((prev) => prev + amount)}
          >
            +{amount}
          </Text>
        ))}
      </Flex>
    </Flex>
  )
}
