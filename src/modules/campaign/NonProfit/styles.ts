import { Style } from '../../../types/Style'

export const styles: Style = {
  container: {
    px: 3,
    mx: -3,
    bg: 'backgroundGray',
    ':hover': {
      bg: 'primary',
      '& *': {
        color: 'white'
      }
    },
    transition: 'background .2s ease'
  },
  header: {
    label: 'nonprofit-item',
    alignItems: 'start',
    justifyContent: 'space-between',
    py: 3,
    backgroundColor: 'inherit'
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  avatar: {
    marginRight: 3,
    alignSelf: 'center'
  },
  aboutContainer: {
    backgroundColor: 'inherit'
  },
  aboutText: {
    display: 'block',
    paddingBottom: 3,
    color: 'text'
  },
  location: {
    textTransform: 'uppercase',
    color: 'textGray',
    fontWeight: 'bold'
  }
}
