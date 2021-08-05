import { Style } from 'types/Style'

export const styles: Style = {
  button: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    '& > span': {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    '& > svg': {
      flexShrink: 0,
      mr: [2, 3, 4]
    }
  }
}
