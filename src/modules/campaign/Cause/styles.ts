import { Style } from '../../../types/Style'

export const styles: Style = {
  container: {
    padding: [3, 6],
    backgroundColor: 'backgroundGray',
    borderTop: '1px solid',
    borderColor: 'muted'
  },
  text: {
    color: 'textGray',
    '& > span': {
      color: 'text'
    }
  }
}
