import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    p: [3, 4],
    ':hover': {
      bg: ['inherit', 'primaryBg']
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
  avartarContainer: {
    position: 'relative',
    marginRight: [4, 7],
    alignSelf: 'center',
    width: ['2.5rem', '4rem'],
    height: ['2.5rem', '4rem'],
    flexShrink: 0
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
    mt: [1, 2],
    color: 'textGray'
  }
}
