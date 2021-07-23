import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    mt: [7, 9],
    px: 4
  },
  label: {
    fontWeight: 400,
    mb: [3, 6]
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
    mb: [4, 6]
  },
  frequencyBase: {
    color: 'primary',
    px: [4, 3],
    py: 3,
    lineHeight: 'base',
    fontWeight: 'body',
    cursor: 'pointer',
    textAlign: 'center',
    border: '2px solid',
    borderColor: 'transparent',
    borderRadius: 'frequency',
    transition: 'background .4s',
    alignItems: 'center',
    justifyContent: 'center',
    '& > span': {
      display: 'block',
      transform: [null, 'translateY(0.1em)']
    }
  },
  selectedFrequency: {
    color: 'primary',
    position: 'relative',
    borderColor: 'primary',
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
      borderRadius: 'frequency'
    }
  },
  donationContainer: {
    label: 'frequency-donationContainer',
    borderRadius: 'small',
    bg: 'backgroundGray',
    p: 4,
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
