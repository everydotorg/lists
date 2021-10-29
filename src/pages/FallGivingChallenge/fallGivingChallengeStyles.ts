import { ThemeUIStyleObject } from '@theme-ui/css'

export const styles: Record<string, ThemeUIStyleObject> = {
  borderedText: {
    p: 7,
    border: '3px solid',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '24px',
    fontSize: ['2.5rem', '2.5rem'],
    textAlign: 'center',
    lineHeight: '48px'
  },
  section: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'min(100%, 900px)',
    margin: '0 auto',
    pb: 12,
    px: 7
  },
  heading: {
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 1,
    letterSpacing: '-0.02em',
    width: 'min(100%, 1150px)',
    margin: '0 auto',
    py: 12,
    px: 7
  },
  title: {
    fontSize: ['3rem', '3rem'],
    lineHeight: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    mb: 10
  },
  smallText: { fontSize: '24px', lineHeight: '32px' }
}
