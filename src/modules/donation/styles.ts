import { Style } from '../../types/Style'

export const styles: Style = {
  page: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr max-content',
    height: '100vh',
    bg: 'primary'
  },
  header: {
    fontWeight: 400,
    opacity: '0.8',
    mb: 1
  }
}
