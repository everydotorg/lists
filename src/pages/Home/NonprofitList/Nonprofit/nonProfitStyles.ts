import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    p: [4, 5],
    flexDirection: ['column-reverse', 'row'],
    borderRadius: 'small',
    cursor: 'pointer',
    border: '1px solid',
    borderColor: 'borderGray',
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
    ml: [0, 5],
    display: 'grid',
    gridTemplateRows: '1fr max-content',
    gridTemplateColumns: '1fr'
  },
  textContainer: {
    flexDirection: 'column'
  },
  aboutText: {
    fontSize: 3,
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
    mixBlendMode: 'multiply',
    gridRow: '1 / -1',
    gridColumn: '1 / -1'
  },
  logosSection: {
    label: 'logos-container',
    gridColumn: '1 / -1',
    gridRow: '1 / -1',
    flexWrap: 'wrap-reverse',
    alignSelf: 'end',
    justifyContent: 'flex-end'
  },
  logoContainer: {
    zIndex: 10,
    overflow: 'hidden',
    height: '24px',
    mx: 1,
    mb: 2,
    mt: 0
  }
}
