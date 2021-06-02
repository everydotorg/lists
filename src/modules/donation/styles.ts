import { Style } from '../../types/Style'

export const styles: Style = {
  page: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr max-content',
    bg: 'primary'
  },
  container: { flexDirection: 'column', overflow: 'auto' },
  header: {
    fontWeight: 400,
    opacity: '0.8',
    mb: 1
  },
  donateButtonContainer: {
    position: 'sticky',
    bottom: 0,
    bg: 'primary',
    p: 1
  },
  donateButton: {
    width: '100%'
  },
  donateButtonDisabled: {
    cursor: 'default',
    opacity: 0.8
  }
}
