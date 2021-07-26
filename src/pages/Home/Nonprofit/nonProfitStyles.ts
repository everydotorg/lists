import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    p: [4, 5],
    flexDirection: ['column-reverse', 'row'],
    borderRadius: 'button'
  },
  section: {
    flex: 1
  },
  infoSection: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& > :not(:last-child)': {
      mb: [4, 5]
    }
  },
  imageSection: {
    mb: [4, 0],
    ml: [0, 5]
  },
  textContainer: {
    flexDirection: 'column',
    '& > :not(:last-child)': {
      mb: 2
    }
  },
  aboutText: {
    fontSize: [3, 4],
    lineHeight: 'heading'
  },
  image: {
    minHeight: '256px',
    width: '100%',
    borderRadius: 'button',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    mixBlendMode: 'multiply'
  }
}
