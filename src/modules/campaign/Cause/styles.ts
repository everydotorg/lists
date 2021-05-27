import { Style } from '../../../types/Style'

export const styles: Style = {
  container: {
    padding: 3,
    backgroundColor: 'backgroundGray',
    borderTop: '1px solid',
    borderColor: 'muted'
  },
  text: {
    color: 'textGray',
    fontSize: 2,
    '& > span': {
      color: 'text'
    }
  }
}
