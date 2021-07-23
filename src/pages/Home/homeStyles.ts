import { Style } from 'types/Style'

export const styles: Style = {
  givelistSection: {
    width: ['100%', '60%'],
    flexDirection: 'column',
    p: 5,
    '& > :not(:last-child)': {
      mb: 5
    }
  }
}
