import { Style } from '../../types/Style'
import { isIOS } from '../../utils/isIOS'

export const styles: Style = {
  page: {
    display: ['flex', 'block'],
    bg: 'backgroundGray',

    flexDirection: ['column', 'unset'],

    height: isIOS() ? [null, '100vh'] : ['100%', '100vh'],
    minHeight: [isIOS() ? '-webkit-fill-available' : '100vh', 'unset']
  },
  container: {
    flexDirection: 'column',
    overflow: 'auto',
    backgroundColor: 'backgroundGray',
    height: ['100%', '100vh'],
    flex: ['1', 'unset']
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
    left: 0,

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
