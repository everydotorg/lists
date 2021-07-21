import { Style } from 'types/Style'

export const styles: Style = {
  goalContainer: {
    pt: [3, 0]
  },
  progressBar: {
    backgroundColor: 'progressBg',
    height: [null, '8px']
  },
  legend: {
    flexDirection: 'column',
    '& > *+*': {
      mt: 1
    }
  },
  donated: {
    color: 'primary'
  },
  goalDetails: {
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: 3
  }
}
