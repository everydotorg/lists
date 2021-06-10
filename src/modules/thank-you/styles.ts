import { Style } from '../../types/Style'

export const styles: Style = {
  page: {
    overflow: [null, 'auto'],
    height: [null, '100vh'],
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    flexDirection: 'column'
  },
  headerImg: {
    margin: [0, '0 auto'],
    padding: 0,
    width: [null, '60%'],
    borderBottom: '1px solid',
    borderColor: 'dividerInverted'
  },
  thankYouContainer: {
    label: 'thankYouContainer',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    px: 6,
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
    py: [3, 6]
  },
  shareContainer: {
    px: 5,
    py: [3, 6],
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
  shareButton: { width: '100%', mb: 4 },
  socialShareContainer: {
    justifyContent: 'center',
    marginBottom: 0,
    '& > :not(:last-child)': {
      marginRight: 3
    }
  }
}
