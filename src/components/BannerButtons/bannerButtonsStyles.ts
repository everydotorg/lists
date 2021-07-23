import { Style } from 'types/Style'

export const styles: Style = {
  group: {
    m: [2, 4],
    justifyContent: ['space-between', 'unset'],
    alignSelf: 'flex-end',
    '& > :not(:last-child)': {
      mr: 3
    }
  },
  aboutButton: {
    bg: 'rgba(0, 0, 0, 0.2)',
    color: 'white',
    backdropFilter: 'blur(100px)',
    border: 'none'
  }
}
