import { Style } from 'types/Style'

export const styles: Style = {
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    bg: 'white'
  },
  description: {
    backgroundColor: 'white'
  },
  chevronDown: {
    p: 0,
    lineHeight: 1
  },
  container: {
    border: '1px solid',
    borderColor: 'borderGray',
    borderRadius: 'small',
    px: [3, 4],
    py: [3, 4],
    m: [4, 6],
    mt: [4, 0]
  },
  matchingTitle: {
    color: 'text',
    lineHeight: ['20px', '32px']
  },
  matchingDescription: {
    opacity: '0.8',
    lineHeight: ['20px', '24px']
  }
}
