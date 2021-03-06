import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    flexDirection: 'column',
    borderRadius: 'small',
    p: [3, 6]
  },
  containerInvertedColor: {
    bg: 'white',
    border: '1px solid',
    borderColor: 'borderGray',
    color: 'text'
  },
  containerColor: {
    color: 'primary',
    position: 'relative',
    bg: 'primaryBg',
    borderRadius: 'small',
    '& > *': {
      zIndex: 1
    }
  },
  titleText: { color: 'inherit', mb: 2 },
  descriptionText: {
    fontSize: ['0.875rem', '1rem'],
    color: 'textGray'
  }
}
