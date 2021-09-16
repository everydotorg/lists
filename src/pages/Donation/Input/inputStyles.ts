import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    flexDirection: 'column',
    px: [4, 6],
    mt: [7, 9]
  },
  sectionsContainer: {
    border: ['1px solid', 'none'],
    borderRadius: 'default',
    borderColor: ['borderGray', 'none'],
    p: [2, 0]
  },
  inputSection: {
    label: 'inputSection',
    flex: 1,
    position: 'relative',
    height: ['2rem', '3.5rem']
  },
  decoratorContainer: {
    label: 'inputSection-decoratorContainer',
    ml: [1, 6],
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    pointerEvents: 'none'
  },
  decoratorText: {
    label: 'inputSection-decoratorContainer',
    color: ['text', 'textGray'],
    fontSize: [3, 5],
    fontWeight: ['body', 'bold']
  },
  label: {
    label: 'inputSection-label',
    mb: [3, 4],
    fontWeight: 400
  },
  input: {
    label: 'inputSection-input',
    border: ['none', '1px solid'],
    borderColor: ['none', 'borderGray'],
    borderRadius: 'default',
    outline: 'none',
    bg: 'inputBackground',
    fontSize: [3, 4],
    lineHeight: 'input',
    fontWeight: 'heading',
    letterSpacing: '-0.02em',
    fontFamily: 'body',
    py: [0, 4],
    px: [0, 6],
    ':focus': {
      bg: 'white',
      border: ['none', '1px solid'],
      borderColor: ['unset', 'primary']
    },
    '::placeholder': {
      fontSize: [4, 5],
      opacity: 0.7,
      fontWeight: 'body'
    }
  },
  inputNumber: {
    label: 'inputSection-inputNumber',
    pl: ['calc(1rem + 8px)', 'calc(2rem + 16px)'],
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

  addAmountContainer: {
    label: 'addAmountContainer',
    mt: 2,
    color: 'primary',
    '& > *:not(:last-child)': {
      mr: 1
    }
  },
  addAmountText: {
    label: 'addAmountText',
    fontWeight: '500',
    cursor: 'pointer',
    py: 2,
    px: 3,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    color: 'primary',
    lineHeight: 1.5,
    bg: 'primaryBg',
    borderRadius: 'small',
    transition: 'box-shadow .4s, transform .4s',
    transitionTimingFunction: 'cubic-bezier(0.39, 0.58, 0.57, 1)',
    backfaceVisibility: 'hidden',
    '& > span': {
      display: 'block',
      transform: ['translateY(0.07em)', 'translateY(0.1em)']
    },
    ':hover': {
      color: [null, 'white'],
      bg: 'primary'
    },
    ':active': {
      transform: 'scale(1)',
      boxShadow: 'none'
    }
  },

  // Error styles
  sectionsContainerError: {
    border: ['1px solid', 'none'],
    borderColor: ['#EF4444', 'unset']
  },
  inputError: {
    border: ['none', '1px solid'],
    borderColor: ['unset', '#EF4444']
  },

  plusSection: {
    label: 'plusSection',
    color: 'primary',
    mx: [2, 4],
    alignSelf: 'center',
    fontSize: 5,
    lineHeight: ['2rem', '3.5rem'],
    height: ['2rem', '3.5rem']
  },

  // Match donation styles
  matchDonationSection: {
    label: 'matchDonationSection',
    minWidth: 'max-content',
    flex: ['unset', '1'],
    cursor: 'pointer',
    bg: 'backgroundGray',
    borderRadius: 'default',
    height: ['2rem', '3.5rem']
  },
  matchContent: {
    label: 'matchDonationSection-matchContent',
    flex: ['unset', 1],
    mx: [2, 4],
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > span': {
      transform: 'translateY(0.07em)'
    },
    '& > *:not(:last-child)': {
      mr: [2, 4]
    }
  },
  matchText: {
    label: 'matchDonationSection-matchText',
    fontSize: [2, 4],
    color: ['textGray', 'text'],
    fontWeight: ['bold', 'body']
  },
  chevron: {
    label: 'matchDonationSection-chevron',
    color: ['textGray', 'primary'],
    transform: 'rotate(0deg)',
    transition: 'transform 0.3s',
    flexShrink: 0,
    lineHeight: 1,
    '& > svg': {
      width: ['10px', '16px'],
      height: ['6px', '10px']
    }
  },
  chevronRotated: {
    label: 'matchDonationSection-chevronRotated',
    transform: 'rotate(180deg)'
  },
  expandableBox: {
    label: 'matchDonationSection-expandableBox',
    position: 'absolute',
    top: 2,
    p: 4,
    bg: 'white',
    borderRadius: 'small',
    border: '1px solid',
    borderColor: 'borderGray',
    boxShadow: '0px 8px 32px -16px rgba(46, 52, 52, 0.2)',
    zIndex: 1
  }
}
