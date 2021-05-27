// example base theme from @theme-ui/presets
export const theme = {
  breakpoints: ['56.25em', '112.5em'],
  space: [0, 4, 8, 16, 20, 24, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Basis Grotesque Pro", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    base: 1,
    body: 1.5,
    heading: 1.2
  },
  colors: {
    text: '#000',
    textGray: '#868A8A',
    background: '#fff',
    divider: '#EEEEEE',
    backgroundGray: '#EAEDED',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6'
  },
  buttons: {
    primary: {
      cursor: 'pointer',
      borderRadius: '100px',
      py: 4,
      fontSize: 2,
      lineHeight: 'base',
      letterSpacing: '-0.01em',
      fontFamily: 'body',
      fontWeight: 'heading',
      color: 'white',
      '&:hover': {
        opacity: '0.85'
      },
      '&:active': {
        outline: 'none',
        opacity: '0.9'
      },
      '&:focus': {
        outline: 'none'
      }
    },
    primaryInverted: {
      variant: 'buttons.primary',
      color: 'primary',
      background: 'white'
    }
  },
  text: {
    title: {
      fontFamily: 'body',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
      letterSpacing: '-0.01em'
    },
    small: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 1,
      lineHeight: 'body',
      letterSpacing: '-0.05em',
      color: 'textGray'
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0
    }
  }
}
