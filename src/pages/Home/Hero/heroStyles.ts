import { Style } from 'types/Style'

export const styles: Style = {
  brandContainer: {
    alignItems: 'flex-start'
  },
  header: {
    fontSize: [6, 7]
  },
  textContainer: {
    flex: 1,
    px: [4, 6],
    mt: [11, 6],
    mb: [2, 6],
    flexDirection: 'column',
    justifyContent: 'flex-end',
    '& > :not(:last-child)': {
      mb: 1
    }
  },
  buttonsContainer: {
    flex: 1,
    px: [4, 6],
    mt: [2, 6],
    mb: [11, 6],
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& > :not(:last-child)': {
      mb: 2
    }
  }
}
