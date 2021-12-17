import { Style } from 'types/Style'

export const styles: Style = {
  brandContainer: {
    label: 'brand-container',
    alignItems: 'flex-end'
  },
  brandContent: {
    label: 'brand-content',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    p: [4, 6]
  },
  withBorderTop: {
    borderTop: '1px solid',
    borderTopColor: 'borderGray'
  },
  listText: {
    label: 'brand-listText',
    color: 'text',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  logoSpace: {
    label: 'brand-logoSpace',
    mr: 2,
    fontWeight: 'bold'
  },
  poweredBy: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& > svg': {
      width: ['45%', 'unset']
    }
  },
  everyLink: {
    height: ['auto', 'auto'],
    display: 'flex'
  }
}
