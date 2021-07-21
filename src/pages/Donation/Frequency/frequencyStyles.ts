import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    px: 4,
    '& > :not(:last-child)': {
      mb: 4
    }
  },
  label: {
    fontWeight: 400
  },
  input: {
    display: 'none'
  },
  selectorContainer: {
    alignItems: 'center'
  },
  frequencyBase: {
    fontSize: [3, 1],
    color: 'primary',
    px: [4, 3],
    py: 0,
    lineHeight: 'base',
    height: ['2.5rem', '1.75rem'],
    fontWeight: 'body',
    cursor: 'pointer',
    textAlign: 'center',
    border: '1px solid',
    borderColor: 'primary',
    transition: 'background .4s',
    alignItems: 'center',
    justifyContent: 'center',
    '& > span': {
      display: 'block',
      transform: [null, 'translateY(0.1em)']
    }
  },
  frequencyLeft: {
    borderTopLeftRadius: 'full',
    borderBottomLeftRadius: 'full'
  },
  frequencyRight: {
    borderTopRightRadius: 'full',
    borderBottomRightRadius: 'full'
  },
  selectedFrequency: {
    color: 'white',
    bg: 'primary'
  },
  donationContainer: {
    border: '1px solid #CCCCCC',
    borderRadius: 'small',
    bg: 'dividerInverted',
    p: 4
  }
}
