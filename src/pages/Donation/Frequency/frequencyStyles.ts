import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    mt: [7, 9],
    px: [4, 6]
  },
  label: {
    fontWeight: 400,
    mb: [3, 4]
  },
  input: {
    display: 'none'
  },
  selectorContainer: {
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'borderGray',
    borderRadius: 'small',
    p: 1,
    mb: [4, 6],
    height: ['3rem', '3.5rem'],
    '& > #one-time:not(:checked) + label': {
      '&::before': {
        transform: 'translateX(100%)'
      },
      '&::after': {
        transform: 'translateX(100%)'
      }
    }
  },
  frequencyBase: {
    color: 'primary',
    px: [4, 3],
    py: 3,
    lineHeight: 'base',
    fontWeight: 'body',
    cursor: 'pointer',
    textAlign: 'center',
    borderRadius: 'default',
    transition: 'background .4s',
    alignItems: 'center',
    justifyContent: 'center',
    '& > span': {
      display: 'block',
      transform: 'translateY(0.07em)'
    }
  },
  selectedFrequency: {
    position: 'relative',
    '&::before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      border: '2px solid',
      borderColor: 'primary',
      borderRadius: 'default',
      transition: 'transform .25s cubic-bezier(.55,.08,0,1)',
      bg: 'primaryBg'
    }
  },
  donationContainer: {
    label: 'frequency-donationContainer',
    borderRadius: 'small',
    bg: 'backgroundGray',
    p: 4,
    mb: [4, 6],
    position: 'relative'
  },
  donationContainerArrow: {
    color: 'backgroundGray',
    label: 'frequency-donationContainerArrow',
    position: 'absolute',
    top: 0,
    right: '25%',
    transform: 'translate(50%, -63%)'
  }
}
