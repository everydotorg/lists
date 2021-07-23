export const theme = {
  breakpoints: ['56.25em', '132.5em'],
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
    frequency: 8,
    small: 12,
    button: 12,
    card: 16,
    full: 9999
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    base: 1,
    input: 1.15,
    heading: 1.25,
    body: 1.5
  },
  colors: {
    // causes colors
    justice: '#C8E2E3',
    justiceText: '#2F7074',

    animals: '#F6DCC1',
    animalsText: '#AC6B28',

    education: '#D8E4F2',
    educationText: '#4D6B8E',

    humans: '#F7E5C5',
    humansText: '#A47929',

    health: '#F0D3E4',
    healthText: '#944C75',

    environment: '#DBE7BB',
    environmentText: '#5E7D0F',

    // apps colors
    text: '#2E3434',
    textGray: 'rgba(46, 52, 52, 0.6)',
    primary: '#00A37F',

    // @todo: revisit
    background: '#FFF',
    divider: '#EEEEEE',
    inputBackground: '#FFF',
    backgroundGray: '#F3F6F6',
    dividerInverted: 'rgba(255, 255, 255, 0.1)',
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
      border: '1px solid',
      borderColor: 'borderGray',
      borderRadius: 'small',
      outline: 'none',
      bg: 'inputBackground',
      fontSize: [5, 5],
      lineHeight: 'input',
      fontWeight: 'heading',
      letterSpacing: '-0.02em',
      fontFamily: 'body',
      width: '100%',
      py: 4,
      px: 6,
      ':focus': {
        bg: 'white',
        border: '1px solid',
        borderColor: 'primary',
        boxShadow: '0px 0px 0px 2px rgba(215, 83, 131, 0.2)'
      },
      '::placeholder': {
        fontSize: [4, 5],
        opacity: 0.7,
        fontWeight: 'body'
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
      py: [3, 4],
      fontSize: [3, 4],
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
      borderColor: 'borderGray',
      fontWeight: 'body'
    }
  },
  text: {
    title: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'heading',
      fontSize: [3, 5],
      letterSpacing: '-0.015em'
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
      fontSize: [5, 5],
      lineHeight: 'input',
      fontWeight: 'heading',
      letterSpacing: '-0.02em',
      fontFamily: 'body',
      color: 'textGray'
    },
    error: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      color: 'error',
      opacity: '0.9',
      letterSpacing: ['-0.01em', '-0.015em'],
      fontSize: 0
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
    button: {
      cursor: 'pointer',
      lineHeight: 'base',
      letterSpacing: '-0.01em',
      fontSize: 3,
      fontWeight: 'body',
      textDecoration: 'none',
      px: 3,
      py: 2,
      border: '1px solid',
      borderRadius: 'small'
    },
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

export const causeTextColor = (cause: string) => cause + 'Text'
