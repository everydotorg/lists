export const styles = {
  container: {
    label: 'alternativeDonation-Container',
    p: [4, 6],
    borderTop: '1px solid',
    borderTopColor: 'borderGray',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    label: 'alternativeDonation-Title',
    mr: 4,
    color: 'text'
  },
  linksContainer: {
    label: 'alternativeDonation-LinksContainer',
    alignItems: 'center',
    '& > *:not(:last-child)': {
      mr: 4
    }
  }
}
