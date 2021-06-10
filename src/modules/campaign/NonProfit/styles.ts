import { Style } from '../../../types/Style'

export const styles: Style = {
  container: {
    alignItems: 'start',
    justifyContent: 'space-between',
    py: 3,
    backgroundColor: 'inherit',
    borderTop: '1px solid',
    borderColor: 'muted'
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  avatar: {
    marginRight: 3
  },
  aboutContainer: {
    backgroundColor: 'inherit'
  },
  aboutText: {
    fontSize: 2,
    display: 'block',
    paddingBottom: 3
  },
  location: {
    textTransform: 'uppercase',
    color: 'textGray',
    fontWeight: 'bold',
    fontSize: 1
  }
}
