import { Style } from 'types/Style'

export const styles: Style = {
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    p: 4,
    pb: 0
  },
  firstLine: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  closeBox: {
    cursor: 'pointer',
    color: 'primary',
    p: [3, 6],
    border: '1px solid',
    borderColor: 'borderGray',
    borderRadius: 'button',
    display: 'flex',
    '& > svg': {
      width: ['14px', '18px'],
      height: ['14px', '18px']
    }
  },
  header: {
    fontWeight: 400,
    color: 'textGray',
    opacity: '0.8'
  }
}
