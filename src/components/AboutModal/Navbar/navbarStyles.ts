import { Style } from 'types/Style'

export const styles: Style = {
  navbarContainer: {
    borderBottom: '1px solid',
    borderColor: 'borderGray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    p: [4, 6]
  },
  menuContainer: {
    '& > :not(:last-child)': {
      mr: 5
    }
  },
  menuItem: {
    fontSize: [2, 3],
    fontWeight: 'body',
    color: 'textGray',
    cursor: 'pointer'
  },
  menuItemSelected: {
    color: 'primary',
    fontWeight: 'bold'
  },
  closeContainer: {
    cursor: 'pointer',
    color: 'primary',
    width: 14,
    height: 14
  }
}
