import { Style } from 'types/Style'

export const styles: Style = {
  card: {
    cursor: 'pointer',
    border: '1px solid',
    borderColor: 'borderGray',
    borderRadius: 'small',
    p: [3, 4]
  },
  titleContainer: {
    color: 'primary',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    mb: 2
  },
  title: {
    color: 'primary',
    fontWeight: 'bold'
  },
  chevronContainer: {
    transform: 'rotate(270deg)'
  }
}
