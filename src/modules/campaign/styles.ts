import { Style } from '../../types/Style'

export const styles: Style = {
  page: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    bg: 'backgroundGray',
    gridTemplateRows: '1fr max-content'
  },
  container: {
    flexDirection: 'column',
    gridRow: '1/2',
    overflow: 'auto',
    backgroundColor: 'backgroundGray'
  },
  campaignInfo: {
    flexDirection: 'column',
    bg: 'white',
    padding: [3, 6]
  },
  campaignTitle: {
    display: [null, 'none'],
    mb: 3
  },
  buttonContainer: {
    bg: 'backgroundGray',
    gridRow: '2/3',
    p: 1,
    position: 'sticky',
    bottom: 0,
    display: [null, 'none']
  },
  submitButton: {
    width: '100%'
  },
  nonprofitsContainer: {
    backgroundColor: 'backgroundGray',
    px: [3, 6]
  }
}
