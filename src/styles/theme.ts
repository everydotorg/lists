export const theme = {
  breakpoints: ['56.25em', '112.5em'],
  space: [
    0,
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
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
    '0.5rem',
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '6rem'
  ],
  radii: {
    zero: 0,
    small: 8,
    card: 24,
    button: 12,
    full: 9999
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    base: 1,
    body: 1.5,
    heading: 1.25,
    input: 1.15
  },
  colors: {
    text: '#2E3434',
    textGray: 'rgba(46, 52, 52, 0.6)',
    background: '#FFF',
    divider: '#EEEEEE',
    inputBackground: '#F3F6F6',
    backgroundGray: '#FAFAFA',
    dividerInverted: 'rgba(255, 255, 255, 0.1)',
    primary: '#07C',
    secondary: '#30C',
    muted: '#EEEEEE',
    progressBg: '#EAEDED',
    error: '#EF4444',
    borderGray: '#CCCCCC'
  },
  images: {
    avatar: {
      width: ['2.5rem', '4rem'],
      height: ['2.5rem', '4rem'],
      borderRadius: 'full',
      flexShrink: 0
    }
  },
  forms: {
    input: {
      border: '1px solid transparent',
      borderRadius: 'small',
      outline: 'none',
      bg: 'inputBackground',
      fontSize: [5, 3],
      lineHeight: 'input',
      fontWeight: 'heading',
      letterSpacing: '-0.02em',
      fontFamily: 'body',
      width: '100%',
      py: 3,
      ':focus': {
        bg: 'white',
        border: '1px solid',
        borderColor: 'primary',
        boxShadow: '0px 0px 0px 2px rgba(215, 83, 131, 0.2)'
      },
      '::placeholder': {
        fontSize: [4, 2],
        opacity: 0.7
      }
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
      borderRadius: 'button',
      px: 5,
      py: 3,
      fontSize: [3, 1],
      lineHeight: ['body', 'base'],
      letterSpacing: '-0.01em',
      fontFamily: 'body',
      fontWeight: 'heading',
      color: 'white',
      textDecoration: 'none',
      display: 'block',
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
      transition: 'opacity .2s',
      '& > span': {
        // hack to center the text of the button
        // https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align
        transform: ['translateY(0.07em)', 'translateY(0.1em)'],
        display: 'block'
      }
    },
    primarySmall: {
      variant: 'buttons.primary',
      px: 6,
      py: 4,
      fontFamily: 'body',
      fontWeight: 'heading',
      fontSize: [3, 4],
      lineHeight: 'body',
      letterSpacing: '-0.01em'
    },
    primarySmallInverted: {
      variant: 'buttons.primarySmall',
      bg: 'white',
      color: 'primary',
      border: '1px solid',
      borderColor: 'borderGray'
    },
    primaryInverted: {
      variant: 'buttons.primary',
      color: 'primary',
      background: 'white',
      border: '1px solid',
      borderColor: 'borderGray'
    }
  },
  text: {
    title: {
      fontFamily: 'body',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4, 1],
      letterSpacing: '-0.01em'
    },
    regular: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: [3, 5],
      letterSpacing: ['-0.01em', '-0.015em'],
      color: 'text'
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      letterSpacing: '-0.01em'
    },
    caption: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: [2, 3],
      lineHeight: 'body',
      letterSpacing: '-0.005em',
      color: 'textGray'
    },
    small: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: [2, 4],
      lineHeight: ['body', 'heading'],
      letterSpacing: ['-0.005em', '-0.01em'],
      color: 'textGray'
    },
    input: {
      fontSize: [5, 3],
      lineHeight: 'input',
      fontWeight: 'heading',
      letterSpacing: '-0.02em',
      fontFamily: 'body'
    },
    error: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      color: 'error',
      opacity: '0.9',
      letterSpacing: ['-0.01em', '-0.015em'],
      fontSize: [1, 0]
    },
    large: {
      fontSize: [5, 2],
      lineHeight: 'heading',
      letterSpacing: '-0.015em',
      color: 'text'
    },
    h1: {
      fontSize: [4, 7],
      lineHeight: ['heading', 'input'],
      letterSpacing: '-0.015em',
      fontWeight: 'bold',
      color: 'text'
    }
  },
  links: {
    smallSubtle: {
      cursor: 'pointer',
      lineHeight: 'base',
      letterSpacing: '-0.01em',
      fontWeight: 'body',
      fontSize: [2, 0],
      color: 'textGray',
      textDecoration: 'none',
      '&:hover': {
        opacity: '0.85'
      },
      transition: 'opacity .2s'
    }
  },
  styles: {
    a: {
      color: 'inherit',
      '&:visited': {
        color: 'inherit'
      },
      '&:active': {
        color: 'inherit'
      },
      '&:link': {
        color: 'inherit'
      }
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'text.heading',
      fontSize: 7
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1
    }
  }
}
