import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    px: 5,
    py: 3,
    borderTop: '1px solid',
    borderColor: 'muted',
    flex: [null, 1],
    display: [null, 'flex'],
    flexDirection: [null, 'column'],
    justifyContent: [null, 'space-between']
  },
  lightText: {
    color: 'textGray'
  },
  button: {
    width: '100%',
    mt: 4,
    textAlign: 'center'
  }
}
