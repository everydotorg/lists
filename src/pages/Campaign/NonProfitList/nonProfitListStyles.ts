import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    p: [3, 6],
    ':hover': {
      bg: ['inherit', 'primary'],
      '& *': {
        color: [null, 'white']
      }
    },
    transition: 'background .2s ease'
  },
  header: {
    label: 'nonprofit-item',
    alignItems: 'start',
    justifyContent: 'space-between'
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  expandableChevron: {
    alignSelf: 'center'
  },
  avatar: {
    marginRight: [4, 7],
    alignSelf: 'center'
  },
  aboutContainer: {
    backgroundColor: 'transparent'
  },
  aboutText: {
    display: 'block',
    pt: 4,
    color: 'text'
  },
  location: {
    color: 'textGray'
  }
}
