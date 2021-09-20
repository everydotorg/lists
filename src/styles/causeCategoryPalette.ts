import { Cause } from '../../types/Cause'

export const causeCategoryPalette: {
  readonly [key in Cause]: {
    readonly extraDark: string
    readonly dark: string
    readonly medium: string
    readonly light: string
    readonly pastel40: string
    readonly pastel20: string
  }
} = {
  animals: {
    extraDark: '#A2611E',
    dark: '#D49350',
    medium: '#DE9D5A',
    light: '#E8A764',
    pastel40: '#F6DCC1',
    pastel20: '#FAEDE0'
  },
  education: {
    extraDark: '#577598',
    dark: '#7593B6',
    medium: '#89A7CA',
    light: '#9DBBDE',
    pastel40: '#D8E4F2',
    pastel20: '#EBF1F8'
  },
  environment: {
    extraDark: '#5E7D10',
    dark: '#86A537',
    medium: '#9AB94B',
    light: '#A4C355',
    pastel40: '#DBE7BB',
    pastel20: '#EDF3DD'
  },
  health: {
    extraDark: '#9E567F',
    dark: '#BC749D',
    medium: '#D088B1',
    light: '#DA92BB',
    pastel40: '#F0D3E4',
    pastel20: '#F8E9F1'
  },
  justice: {
    extraDark: '#397A7E',
    dark: '#57989C',
    medium: '#6BACB0',
    light: '#75B6BA',
    pastel40: '#C8E2E3',
    pastel20: '#E3F0F1'
  },
  humans: {
    extraDark: '#906515',
    dark: '#CCA151',
    medium: '#E0B565',
    light: '#EABF6F',
    pastel40: '#F7E5C5',
    pastel20: '#FBF2E2'
  },
  research: {
    extraDark: '#2F806D',
    dark: '#59A593',
    medium: '#61B29F',
    light: '#8AC8B9',
    pastel40: '#C8E8E1',
    pastel20: '#E0F1E7'
  }
}
