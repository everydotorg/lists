import { Style } from '../../types/Style'
import { isIOS } from '../../utils/isIOS'

export const styles: Style = {
  page: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    bg: 'backgroundGray',
    gridTemplateRows: '1fr max-content',
    height: isIOS() ? ['-webkit-fill-available', '100%'] : '100vh'
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
    padding: 4
  },
  campaignTitle: {
    display: [null, 'none'],
    mb: 4
  },
  aboutText: {
    color: 'textGray',
    lineHeight: 1.5
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
    px: 3
  }
}
