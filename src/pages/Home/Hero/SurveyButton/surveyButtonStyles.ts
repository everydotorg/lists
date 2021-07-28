import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    px: [0, 4],
    py: 4,
    bg: 'primary',
    borderRadius: ['default', 'small'],
    transition: 'opacity .2s',
    justifyContent: ['center', 'space-between'],
    ':hover': {
      opacity: 0.8
    },
    alignItems: 'center',
    height: '100%',
    '& > span': {
      transform: 'translateY(0.07em)'
    }
  },
  text: { color: 'white', fontWeight: 'bold', display: 'block' },
  caption: {
    display: ['none', 'block'],
    color: 'white',
    opacity: '0.6'
  }
}
