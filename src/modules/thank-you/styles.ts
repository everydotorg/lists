import { Style } from '../../types/Style'

export const styles: Style = {
  header: {
    flexDirection: 'column'
  },
  headerImg: {
    margin: 0,
    padding: 0,
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
    py: 3
  },
  shareContainer: {
    px: 5,
    py: 3,
    borderTop: '1px solid',
    borderColor: 'muted',
    '& > :not(:last-child)': {
      marginBottom: 4
    }
  },
  shareButton: { width: '100%' },
  socialShareContainer: {
    justifyContent: 'center',
    marginBottom: 0,
    '& > :not(:last-child)': {
      marginRight: 3
    }
  }
}
