import { Style } from 'types/Style'

export const styles: Style = {
  modalContainer: {
    label: 'modal-container',
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '9999'
  },
  modalBlur: {
    label: 'modal-blur',
    display: ['none', 'flex'],
    flex: '57%'
  },
  modalContent: {
    label: 'modal-content',
    flexDirection: 'column',
    flex: [1, '50%', '33%'],
    bg: 'white'
  },
  contentSection: {
    label: 'modal-content-section',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'auto',
    py: 4
  }
}
