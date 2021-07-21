import { Style } from 'types/Style'

export const styles: Style = {
  page: {
    display: ['flex', 'grid'],
    gridTemplateColumns: [null, '1fr'],
    gridTemplateRows: [null, '1fr max-content'],
    flexDirection: ['column', 'unset'],
    flex: 1
  },
  container: {
    flexDirection: 'column',
    overflow: 'auto',
    height: ['100%', 'unset'],
    flex: ['1', 'unset']
  },
  header: {
    fontWeight: 400,
    opacity: '0.8',
    mb: 1
  },
  donateButtonContainer: {
    bg: 'white',
    position: 'sticky',
    bottom: 0,
    left: 0,
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
