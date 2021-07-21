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
  linkButton: {
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
