import { ThemeUIStyleObject } from '@theme-ui/css'

export const styles: Record<string, ThemeUIStyleObject> = {
  borderedText: {
    p: [2, 7],
    border: '3px solid',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: ['12px', '24px'],
    fontSize: ['1.5rem', '2.5rem'],
    textAlign: 'center',
    lineHeight: 1.2
  },
  section: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'min(100%, 900px)',
    margin: '0 auto',
    pb: [7, 12],
    px: [4, 7]
  },
  heading: {
    textAlign: 'center',
    fontSize: [9, 10],
    lineHeight: 1,
    letterSpacing: '-0.02em',
    width: 'min(100%, 1150px)',
    margin: '0 auto',
    py: [10, 12],
    px: [4, 7],
    '& > span': {
      display: 'block'
    }
  },
  title: {
    fontSize: ['2rem', '3rem'],
    lineHeight: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    mb: 10
  },
  smallText: { fontSize: [3, 5], lineHeight: 1.2 },
  bigButton: {
    p: [4, 7],
    fontSize: ['2rem', '3rem'],
    lineHeight: 1,
    borderRadius: ['12px', '24px']
  }
}
