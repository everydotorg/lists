import { Style } from '../../../types/Style'

export const styles: Style = {
  container: {
    px: 3,
    '& > :not(:last-child)': {
      mb: 3
    }
  },
  label: { color: 'white', opacity: 0.8 },
  input: { display: 'none' },
  selectorContainer: {
    alignItems: 'center'
  },
  frequencyBase: {
    fontSize: 2,
    color: 'white',
    px: 4,
    py: 2,
    fontWeight: 'body',
    display: 'block',
    cursor: 'pointer',
    textAlign: 'center',
    border: '1px solid',
    borderColor: 'white'
  },
  frequencyLeft: {
    borderTopLeftRadius: '9999px',
    borderBottomLeftRadius: '9999px'
  },
  frequencyRight: {
    borderTopRightRadius: '9999px',
    borderBottomRightRadius: '9999px'
  },
  selectedFrequency: {
    bg: 'white'
  },
  donationContainer: { borderRadius: '8px', bg: 'dividerInverted', p: 3 },
  donationText: { color: 'white', fontSize: 2 }
}
