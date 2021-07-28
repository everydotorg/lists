import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    label: 'home-container',
    height: ['unset', '100%'],
    flexDirection: ['column-reverse', 'row']
  },
  heroSection: {
    label: 'hero-section',
    flex: [1, '43%'],
    flexBasis: 'auto',
    flexDirection: 'column'
  },
  givelistSection: {
    label: 'givelist-section',
    '-webkit-overflow-scrolling': 'touch',
    // Safari & Chromium
    '::-webkit-scrollbar': {
      display: 'none'
    },
    'scrollbar-width': 'none', // firefox
    flex: [1, '57%'],
    overflow: 'auto',
    scrollBehavior: 'smooth',
    flexDirection: 'column',
    p: 5,
    borderRight: ['unset', '1px solid'],
    borderTop: ['1px solid', 'unset'],
    borderColor: ['divider', 'divider'],
    '& > :not(:last-child)': {
      mb: 5
    }
  }
}
