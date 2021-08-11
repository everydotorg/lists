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
  givelistText: {
    label: 'brand-givelistText',
    color: 'text',
    fontWeight: 'bold'
  },
  logoSpace: { label: 'brand-logoSpace', mr: 2 },
  poweredBy: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& > svg': {
      width: ['45%', 'unset']
    }
  }
}
