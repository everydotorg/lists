import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    px: [0, 6],
    py: 4,
    bg: 'primary',
    borderRadius: 'button',
    transition: 'opacity .2s',
    justifyContent: ['center', 'space-between'],
    ':hover': {
      opacity: 0.8
    }
  },
  text: { color: 'white', fontWeight: 'bold' },
  caption: {
    display: ['none', 'unset'],
    color: 'white',
    opacity: '0.6'
  }
}
