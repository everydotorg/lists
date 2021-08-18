import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    p: [4, 5],
    flexDirection: ['column-reverse', 'row'],
    borderRadius: 'small',
    cursor: 'pointer',
    border: '1px solid',
    transition: 'border .2s'
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
  buttonLinkContainer: {
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  linkText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  imageContainer: {
    minHeight: '256px',
    width: '100%',
    position: 'relative',
    filter: 'grayscale()',
    transition: 'filter .2s',
    mixBlendMode: 'multiply'
  }
}