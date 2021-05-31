import { Style } from '../../types/Style'

export const styles: Style = {
  page: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr max-content'
  },
  container: {
    flexDirection: 'column',
    gridRow: '1/2',
    overflow: 'auto'
  },
  campaignInfo: {
    flexDirection: 'column',
    padding: 3
  },
  campaignTitle: {
    mb: 3
  },
  buttonContainer: {
    bg: 'backgroundGray',
    gridRow: '2/3',
    p: 1,
    position: 'sticky',
    bottom: 0
  },
  submitButton: {
    width: '100%'
  },
  nonprofitsContainer: {
    backgroundColor: 'backgroundGray',
    px: 3
  }
}
