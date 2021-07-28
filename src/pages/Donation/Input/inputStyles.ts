import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    flexDirection: 'column',
    px: 4,
    mt: [7, 9]
  },
  inputContainer: {
    position: 'relative',
    width: '100%'
  },
  currencyContainer: {
    ml: 6,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    pointerEvents: 'none'
  },
  label: {
    mb: [3, 6],
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
    mt: 2,
    color: 'primary',
    '& > *:not(:last-child)': {
      mr: 1
    }
  },
  addAmountText: {
    fontWeight: '500',
    cursor: 'pointer',
    py: 2,
    px: 3,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    color: 'primary',
    lineHeight: 1.5,
    //Trick to decrease the opacity of the bg and keep the content opaque
    '&::after': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      bg: 'primary',
      opacity: '0.1',
      borderRadius: 'small'
    },
    '& > span': {
      display: 'block',
      transform: ['translateY(0.07em)', 'translateY(0.1em)']
    }
  }
}
