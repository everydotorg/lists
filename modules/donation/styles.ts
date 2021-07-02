import { Style } from '../../types/Style'
import { isIOS } from 'react-device-detect'

export const styles: Style = {
  page: {
    display: ['flex', 'grid'],
    gridTemplateColumns: [null, '1fr'],
    gridTemplateRows: [null, '1fr max-content'],

    flexDirection: ['column', 'unset'],

    height: isIOS ? [null, '100vh'] : ['100%', '100vh'],
    minHeight: [isIOS ? '-webkit-fill-available' : '100vh', 'unset']
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
