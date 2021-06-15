import { Style } from '../../../types/Style'

export const styles: Style = {
  container: {
    px: 3,
    '& > :not(:last-child)': {
      mb: 3
    }
  },
  label: { color: 'white', opacity: 0.8, fontWeight: 400 },
  input: { display: 'none' },
  selectorContainer: {
    alignItems: 'center'
  },
  frequencyBase: {
    fontSize: [3, 1],
    color: 'white',
    px: [4, 3],
    py: 2,
    fontWeight: 'body',
    display: 'block',
    cursor: 'pointer',
    textAlign: 'center',
    border: '1px solid',
    borderColor: 'white',
    transition: 'background .4s'
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
    bg: 'white'
  },
  donationContainer: { borderRadius: 'small', bg: 'dividerInverted', p: 3 },
  donationText: { color: 'white' }
}
