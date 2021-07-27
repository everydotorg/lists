import { Style } from 'types/Style'

export const styles: Style = {
  page: {
    overflow: [null, 'auto'],
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: '43%'
  },
  header: {
    p: [3, 6],
    pb: [0, 0],
    flexDirection: 'column'
  },
  cardList: {
    flexDirection: 'column',
    p: [3, 6],
    pt: [0, 0],
    '& > *:not(:last-child)': {
      mb: [3, 6]
    }
  },
  progressGoal: {
    mt: [3, 6]
  },
  thankYouContainer: {
    label: 'thankYouContainer',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    px: 3,
    py: 3,
    textAlign: 'center',
    '& > :not(:last-child)': {
      marginBottom: 3
    }
  },
  thankYouText: { color: 'white', lineHeight: 1.25 },
  thankYouTax: { color: 'white', opacity: '0.8' },
  goalContainer: {
    px: 5,
    py: 3
  },
  shareContainer: {
    px: 5,
    py: 3,
    borderTop: '1px solid',
    borderColor: 'muted',
    '& > :not(:last-child)': {
      mb: 4
    },
    flex: [null, 1],
    display: [null, 'flex'],
    flexDirection: [null, 'column'],
    justifyContent: [null, 'space-between']
  },
  socialShareContainer: {
    justifyContent: 'center',
    marginBottom: 0,
    '& > :not(:last-child)': {
      marginRight: 3
    }
  }
}
