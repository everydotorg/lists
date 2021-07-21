import { Style } from '../../../types/Style'

export const styles: Style = {
  banner: {
    display: ['none', 'flex'],
    position: 'relative',
    flex: 1,

    '& img': {
      objectFit: 'cover',
      objectPosition: 'center',
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0
    }
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
    left: 0
  }
}
