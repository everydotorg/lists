import { Style } from '../../../types/Style'

export const styles: Style = {
  container: {
    flexDirection: 'column',
    px: 4
  },
  inputContainer: {
    position: 'relative',
    width: '100%'
  },
  currencyContainer: {
    ml: 4,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    pointerEvents: 'none'
  },
  label: {
    mb: 4,
    fontWeight: 400
  },
  inputNumber: {
    pl: 'calc(2rem + 16px)',
    '::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',

      margin: 0
    },
    '::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    },
    '&[type=number]': {
      MozAppearance: 'textfield'
    }
  },
  inputError: {
    border: '1px solid',
    borderColor: '#EF4444',
    boxShadow: '0px 0px 0px 2px #FECACA'
  },
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
    color: 'primary',
    '& > *:not(:last-child)': {
      mr: 3
    }
  },
  addAmountText: {
    fontWeight: '400',
    cursor: 'pointer'
  }
}
