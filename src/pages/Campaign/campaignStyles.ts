import { Style } from 'types/Style'

export const styles: Style = {
  page: {
    display: ['flex', 'block'],
    flexDirection: ['column', 'unset'],
    flex: '43%'
  },
  container: {
    flexDirection: 'column',
    overflow: 'auto',
    height: '100%',
    flex: ['1', 'unset']
  },
  campaignInfo: {
    flexDirection: 'column',
    bg: 'white',
    padding: 6
  },
  campaignTitle: {
    mb: 4
  },
  aboutText: {
    color: 'textGray',
    lineHeight: 1.5
  },
  buttonContainer: {
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
    // backgroundColor: 'backgroundGray',
    border: '1px solid',
    borderColor: 'borderGray',
    borderRadius: 'button',
    mx: 6,
    '& > *:not(:last-child)': {
      borderBottom: '1px solid',
      borderBottomColor: 'borderGray'
    },
    mb: 4
  }
}
