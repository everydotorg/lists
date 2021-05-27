import { Style } from '../../../types/Style'

export const styles: Style = {
  goalContainer: {
    pt: 3
  },
  progressBar: {
    backgroundColor: 'progressBg'
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
