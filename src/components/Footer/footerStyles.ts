import { Style } from 'types/Style'

export const styles: Style = {
  footerContainer: {
    label: 'footer-container',
    flex: 1,
    alignItems: 'flex-end'
  },
  footerContent: {
    label: 'footer-content',
    flex: 1,
    justifyContent: 'space-between',
    p: 6,
    borderTop: '1px solid',
    borderTopColor: 'borderGray'
  },
  givelistText: {
    label: 'footer-givelistText',
    color: 'text',
    fontWeight: 'bold'
  },
  logoSpace: { label: 'footer-logoSpace', mr: 2 },
  alignCenter: { alignItems: 'center' }
}
