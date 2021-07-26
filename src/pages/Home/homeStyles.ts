import { Style } from 'types/Style'

export const styles: Style = {
  container: {
    height: ['unset', '100%'],
    flexDirection: ['column-reverse', 'row']
  },
  heroSection: {
    flex: '43%',
    flexBasis: 'auto',
    flexDirection: 'column'
  },
  givelistSection: {
    '-webkit-overflow-scrolling': 'touch',
    overflow: 'auto',
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
