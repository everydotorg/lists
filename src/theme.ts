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
    heading: 1.2,
    input: 1.15
  },
  colors: {
    text: '#2E3434',
    textGray: '#868A8A',
    background: '#FFF',
    divider: '#EEEEEE',
    backgroundGray: '#FAFAFA',
    dividerInverted: 'rgba(255, 255, 255, 0.1)',
    primary: '#07C',
    secondary: '#30C',
    muted: '#EEEEEE',
    progressBg: '#EAEDED'
  },
  images: {
    avatar: {
      width: '3.75rem',
      height: '3.75rem',
      borderRadius: '9999px',
      flexShrink: 0
    }
  },
  forms: {
    input: {
      border: 'none',
      outline: 'none',
      color: 'white',
      fontSize: 6,
      lineHeight: 'input',
      fontWeight: 'bold',
      letterSpacing: '-0.02em',
      fontFamily: 'body',
      m: 0,
      p: 0
    },
    select: {
      border: 'none',
      outline: 'none',
      bg: 'transparent'
    }
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
      },
      transition: 'opacity .2s'
    },
    primarySmall: {
      variant: 'buttons.primary',
      py: '12px',
      px: 5
    },
    primaryInverted: {
      variant: 'buttons.primary',
      color: 'primary',
      background: 'white',
      border: '1px solid',
      borderColor: 'primary'
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
    regular: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 3,
      lineHeight: 'body',
      letterSpacing: '-0.01em',
      color: 'text'
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
      letterSpacing: '-0.01em'
    },
    caption: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 1,
      lineHeight: 'body',
      letterSpacing: '-0.05em',
      color: 'textGray'
    },
    small: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: [1, 3],
      lineHeight: ['body', 'heading'],
      letterSpacing: ['-0.05em', '-0.01em'],
      color: 'textGray'
    },
    input: {
      fontSize: 6,
      lineHeight: 'input',
      fontWeight: 'bold',
      letterSpacing: '-0.02em',
      fontFamily: 'body'
    },
    large: {
      fontSize: 4,
      lineHeight: 'heading',
      letterSpacing: '-0.015em',
      color: 'text'
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
      fontSize: 6
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
