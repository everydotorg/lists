import { Style } from 'types/Style'

export const styles: Style = {
  page: {
    label: 'page',
    display: ['flex', 'grid'],
    gridTemplateColumns: [null, '1fr'],
    gridTemplateRows: [null, '1fr max-content'],
    flexDirection: ['column', 'unset'],
    flex: [1, '50%', '33%']
  },
  container: {
    flexDirection: 'column',
    overflow: ['unset', 'auto'],
    flex: ['1', 'unset']
  },
  header: {
    fontWeight: 400,
    opacity: '0.8',
    mb: 1
  },
  donateButtonContainer: {
    px: [4, 6],
    mt: [7, 9],
    position: 'sticky',
    bottom: [4, 6]
  },
  donateCryptoButtonContainer: {
    mt: [2, 3],
    px: [4, 6]
  },
  donateButton: {
    width: '100%',
    opacity: 1
  },
  footer: {
    label: 'campaign-footer',
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column'
  }
}
