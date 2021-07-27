import { Style } from 'types/Style'

export const styles: Style = {
  textContainer: {
    px: 5,
    '& > :not(:last-child)': {
      mb: [3, 4]
    }
  },
  text: {
    display: 'block',
    fontSize: [2, 4]
  },
  creditsContainer: {
    px: 5,
    '& > :not(:last-child)': {
      mb: [3, 4]
    }
  }
}
