// example base theme from @theme-ui/presets
export const theme = {
  breakpoints: ['56.25em', '112.5em'],
  space: [
    0,
    '0.25rem',
    '0.5rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '4rem',
    '8rem',
    '16rem',
    '32rem'
  ],
  fonts: {
    body: '"Basis Grotesque Pro", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit'
  },
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem',
    '6rem'
  ],
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
      width: ['2.5rem', '3.5rem'],
      height: ['2.5rem', '3.5rem'],
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
      height: ['2.5rem', '3.5rem'],
      px: 5,
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 3,
      letterSpacing: '-0.01em'
    },
    primarySmallInverted: {
      variant: 'buttons.primarySmall',
      bg: 'white',
      color: 'text'
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
      fontSize: [2, 4],
      lineHeight: 'body',
      letterSpacing: ['-0.01em', '-0.015em'],
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
      fontSize: [0, 1],
      lineHeight: 'body',
      letterSpacing: '-0.005em',
      color: 'textGray'
    },
    small: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 1,
      lineHeight: ['body', 'heading'],
      letterSpacing: ['-0.005em', '-0.01em'],
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
    },
    h1: {
      fontSize: 5,
      lineHeight: 'input',
      letterSpacing: '-0.015em',
      fontWeight: 'bold',
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
