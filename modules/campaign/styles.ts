import { Style } from '../../types/Style'

export const styles: Style = {
  page: {
    display: ['flex', 'block'],
    bg: 'backgroundGray',
    flexDirection: ['column', 'unset'],
    flex: 1
  },
  container: {
    flexDirection: 'column',
    overflow: 'auto',
    backgroundColor: 'backgroundGray',
    height: '100%',
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
