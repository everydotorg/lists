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
    padding: [4, 6],
    pb: [6, 9]
  },
  campaignTitle: {
    mb: [2, 4]
  },
  aboutText: {
    color: 'textGray',
    lineHeight: 1.5
  },
  buttonContainer: {
    display: [null, 'none'],
    mt: 6
  },
  aboutButtonContainer: {
    mx: 4,
    display: [null, 'none'],
    mb: 6
  },
  aboutButton: {
    mt: 6,
    width: '100%'
  },
  submitButton: {
    width: '100%'
  },
  nonprofitsContainer: {
    border: '1px solid',
    borderColor: 'borderGray',
    borderRadius: 'button',
    mx: [4, 6],
    '& > *:not(:last-child)': {
      borderBottom: '1px solid',
      borderBottomColor: 'borderGray'
    },
    mb: [6, 9]
  }
}
