import { Style } from '../../../types/Style'

export const styles: Style = {
  banner: {
    height: '100vh',
    display: ['none', 'block'],
    position: 'relative',

    '& img': {
      objectFit: 'cover',
      objectPosition: 'center',
      width: '50vw',
      height: '100%'
    }
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
    left: 0
  }
}
