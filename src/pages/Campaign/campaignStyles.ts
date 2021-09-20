import { Style } from 'types/Style'

export const styles: Style = {
  page: {
    display: ['flex', 'block'],
    flexDirection: ['column', 'unset'],
    flex: [null, '50%', '33%']
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
  aboutButtonContainer: {
    mx: 4,
    display: [null, 'none'],
    mb: 6
  },
  aboutButton: {
    mt: 6,
    width: '100%'
  },
  linkButton: {
    display: ['flex', 'none'],
    width: '100%',
    mt: 4
  },
  progressGoal: {
    m: [4, 6],
    mt: [0, 0]
  },
  nonprofitsTitleContainer: {
    label: 'nonprofits-TitleContainer',
    p: [3, 4]
  },

  nonprofitsContainer: {
    border: '1px solid',
    borderColor: 'borderGray',
    borderRadius: 'small',
    mx: [4, 6],
    '& > *:not(:last-child)': {
      borderBottom: '1px solid',
      borderBottomColor: 'borderGray'
    },
    '& > *:first-of-type': {
      borderTopLeftRadius: 'small',
      borderTopRightRadius: 'small'
    },
    '& > *:last-of-type': {
      borderBottomLeftRadius: 'small',
      borderBottomRightRadius: 'small'
    },
    mb: [6, 9]
  },
  footer: {
    label: 'campaign-footer',
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column'
  }
}
