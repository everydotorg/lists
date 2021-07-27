import { Style } from 'types/Style'

export const styles: Style = {
  goalContainer: {
    p: [3, 6],
    border: '1px solid',
    borderColor: 'borderGray',
    borderRadius: 'small',
    flexDirection: 'column'
  },
  progressBar: {
    height: ['12px', '24px'],
    bg: 'transparent',
    position: 'relative',
    mb: [3, 6],
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0.2,
      bg: 'primary',
      zIndex: 1
    }
  },
  legend: { flexDirection: 'column', flex: 1 },
  legendValue: { color: 'primary' }
}
