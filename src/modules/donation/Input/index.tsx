import { Label, Flex, Input as ThemeInput, Text, Select } from 'theme-ui'
import { ChevronDown } from '../../shared/ChevronDown'
import { styles } from './styles'

const amountsToAdd = [10, 20, 50, 100]

interface InputProps {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}
export const Input = ({ value, setValue }: InputProps): JSX.Element => {
  return (
    <Flex sx={styles.container}>
      <Label sx={styles.label} htmlFor="donationAmount" variant="title">
        How much to donate?
      </Label>
      <Flex sx={styles.donationContainer}>
        <Flex sx={styles.inputContainer}>
          <Text variant="input">$</Text>
          <ThemeInput
            value={value}
            id="donationAmount"
            type="number"
            defaultValue="75"
            onChange={(e) => setValue(+e.target.value)}
          />
        </Flex>
        <Flex sx={styles.selectContainer}>
          <Select
            arrow={
              <ChevronDown
                width={20}
                height={10}
                sx={styles.selectArrow}
                inverted
              />
            }
          >
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </Select>
        </Flex>
      </Flex>
      <Flex sx={styles.addAmountContainer}>
        {amountsToAdd.map((amount) => (
          <Text
            sx={styles.addAmountText}
            role="button"
            variant="title"
            key={amount}
            onClick={() => setValue((prev) => prev + amount)}
          >
            +{amount}
          </Text>
        ))}
      </Flex>
    </Flex>
  )
}
