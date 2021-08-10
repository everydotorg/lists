import { Style } from 'types/Style'

export const styles: Style = {
  stack: {
    mx: [4, 6],
    mt: [4, 6],
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'borderGray',
    '& > *:not(:last-child)': {
      borderBottom: '1px solid',
      borderColor: 'borderGray'
    }
  },
  line: {
    color: 'textGray',
    justifyContent: 'space-between',
    py: 2
  }
}
