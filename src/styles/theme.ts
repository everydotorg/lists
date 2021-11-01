export const theme = {
  breakpoints: ['56.25em', '81.25em', '132.5em'],
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
    '6rem',
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
    default: 8,
    small: 8,
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
    // apps colors
    text: '#2E3434',
    textGray: 'rgba(46, 52, 52, 0.8)',
    primary: '#00A37F',
    primaryHover: '#2F806D',
    primaryBg: '#E6F6F2',
    divider: '#DBDBDB',
    background: '#FFF',
    inputBackground: '#FFF',
    backgroundGray: '#F3F6F6',

    // @todo: revisit
    dividerInverted: 'rgba(255, 255, 255, 0.1)',
    secondary: '#30C',
    muted: '#EEEEEE',
    progressBg: '#EAEDED',
    error: '#EF4444',
    borderGray: '#CCCCCC',
    landingChallenge: '#D95C35'
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
    select: {
      border: 'none',
      outline: 'none',
      bg: 'transparent'
    }
  },
  buttons: {
    primary: {
      cursor: 'pointer',
      borderRadius: ['default', 'small'],
      px: 5,
      py: [3, 4],
      fontSize: [3, 4],
      lineHeight: ['body', 'base'],
      letterSpacing: '-0.01em',
      fontFamily: 'body',
      fontWeight: '500',
      color: 'white',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: ['3rem', '3.5rem'],
      '&:hover': {
        bg: 'primaryHover'
      },
      '&:active': {
        outline: 'none',
        opacity: '0.9'
      },
      '&:focus': {
        outline: 'none'
      },
      transition: 'background .2s',
      '& > span': {
        // hack to center the text of the button
        // https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align
        transform: ['translateY(0.07em)', 'translateY(0.1em)'],
        display: 'block'
      }
    },
    secondary: {
      variant: 'buttons.primary',
      py: 2,
      px: 3,
      fontSize: [2, 3],
      letterSpacing: '-0.01em',
      lineHeight: 1.25,
      transition: 'background .2s, color .2s',
      height: ['2rem', '2.5rem']
    },
    secondaryInverted: {
      variant: 'buttons.secondary',
      bg: 'primaryBg',
      color: 'primary',

      '&:hover': {
        bg: 'primary',
        color: 'white'
      }
    },
    primarySmall: {
      variant: 'buttons.primary',
      px: 4,
      height: ['3rem', '3.5rem'],
      fontFamily: 'body',
      fontWeight: '500',
      fontSize: [3, 4],
      lineHeight: 'body',
      letterSpacing: '-0.01em',
      transition: 'background .2s, color .2s, opacity .2s'
    },
    primarySmallInverted: {
      variant: 'buttons.primarySmall',
      bg: 'white',
      color: 'primary',
      border: '1px solid',
      borderColor: 'borderGray',
      transition: 'background .2s',
      '&:hover': {
        bg: 'primaryBg'
      }
    },
    primaryInverted: {
      variant: 'buttons.primary',
      color: 'primary',
      // border: '1px solid',
      borderColor: 'borderGray',
      fontWeight: '500',
      bg: 'primaryBg',
      transition: 'background .2s',
      ':hover': {
        bg: 'primary',
        color: 'white'
      }
    },
    landingChallenge: {
      variant: 'buttons.primary',
      color: 'landingChallenge',
      py: [2, 4],
      px: [3, 6],
      height: 'auto',
      bg: 'white',
      ':hover': {
        bg: '#fff6ee'
      }
    },
    gray: {
      variant: 'buttons.primarySmall',
      bg: 'backgroundGray',
      color: 'text',
      borderRadius: 'default',
      height: 'auto',
      width: 'max-content',
      px: 4,
      py: 2,
      fontSize: 3,
      border: '1px solid transparent',
      transition: 'border .2s',
      ':hover': {
        borderColor: 'text',
        bg: 'backgroundGray'
      }
    },
    link: {
      cursor: 'pointer',
      fontFamily: 'body',
      fontSize: [3, 3, 4],
      lineHeight: 'heading',
      fontWeight: 500,
      outline: 'none',
      bg: 'unset',
      color: 'primary',
      borderRadius: 'none',
      width: 'max-content',
      p: 0,
      m: 0
    }
  },
  text: {
    title: {
      fontFamily: 'body',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [3, 4, 5],
      letterSpacing: '-0.015em'
    },
    regular: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'heading',
      fontSize: [3, 3, 4],
      color: 'text'
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [3, 4, 4],
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
      fontSize: [3, 4],
      lineHeight: ['body'],
      letterSpacing: ['-0.005em', '-0.01em'],
      color: 'textGray'
    },
    medium: {
      variant: 'text.small',
      fontSize: [3, '1.125rem']
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
      fontSize: [6, 6, 7],
      lineHeight: [1],
      letterSpacing: '-0.015em',
      fontWeight: 'bold',
      color: 'text'
    }
  },
  links: {
    regular: {
      cursor: 'pointer',
      height: 'auto',
      color: 'primary',
      fontWeight: 400,
      fontSize: [2, 3],
      textDecoration: 'none'
    },
    button: {
      cursor: 'pointer',
      letterSpacing: '-0.01em',
      fontSize: 3,
      fontWeight: '500',
      lineHeight: 1.5,
      height: ['2rem', '2.5rem'],
      textDecoration: 'none',
      px: 3,
      py: 1,
      borderRadius: 'default',
      display: 'flex',
      alignItems: 'center',
      '& > span': {
        // hack to center the text of the button
        // https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align
        transform: 'translateY(0.07em)',
        display: 'block'
      }
    },
    inverted: {
      cursor: 'pointer',
      lineHeight: 'base',
      letterSpacing: '-0.01em',
      fontSize: [3, 4],
      fontWeight: '500',
      textDecoration: 'none',
      px: 5,
      py: 4,
      color: 'primary',
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: ['default', 'small']
    },
    smallSubtle: {
      cursor: 'pointer',
      lineHeight: 'base',
      letterSpacing: '-0.01em',
      fontWeight: '500',
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
      label: 'anchor',
      height: ['3rem', '3.5rem'],
      color: 'primary',
      textDecoration: 'none',
      cursor: 'pointer',
      '&:visited': {
        color: 'inherit'
      },
      '&:active': {
        color: 'primary'
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
