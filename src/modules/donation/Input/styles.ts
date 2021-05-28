import { Style } from '../../../types/Style'

export const styles: Style = {
  container: {
    color: 'white',
    flexDirection: 'column',
    p: 3,
    pt: 0
  },
  label: {
    opacity: '0.8',
    mb: 3
  },
  donationContainer: { alignItems: 'center', justifyContent: 'space-between' },
  inputContainer: { flex: 3 },
  selectContainer: {
    flex: 1,
    width: '100%',
    '& > div': {
      width: '100%'
    }
  },
  selectArrow: {
    ml: '-28px',
    alignSelf: 'center',
    pointerEvents: 'none'
  },
  addAmountContainer: {
    mt: 3,
    '& > *:not(:last-child)': {
      mr: 3
    }
  },
  addAmountText: { fontWeight: '400', cursor: 'pointer' }
}
