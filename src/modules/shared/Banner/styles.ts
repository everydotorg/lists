import { Style } from '../../../types/Style'

export const styles: Style = {
  banner: {
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: ['none', 'flex']
  },
  urlButton: {
    m: [6, 4],
    alignSelf: 'flex-end',
    ':hover': {
      opacity: 1,
      bg: 'primary',
      color: 'white'
    }
  },
  linkCopied: {
    color: 'primary',
    cursor: 'unset',
    ':hover': {
      bg: 'white',
      opacity: 1
    }
  }
}
