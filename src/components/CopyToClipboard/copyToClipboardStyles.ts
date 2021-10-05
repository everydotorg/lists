import { Style } from 'types/Style'

export const styles: Style = {
  button: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    '& > span': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    '& > svg': {
      flexShrink: 0,
      ml: [2, 3, 4]
    }
  }
}
