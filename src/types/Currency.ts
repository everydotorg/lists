export const currencies = ['USD', 'GBP', 'EUR']

export enum Currency {
  USD = 'USD',
  GBP = 'GBP',
  EUR = 'EUR'
}

export const currencySymbolMap = {
  [Currency.USD]: '$',
  [Currency.GBP]: '£',
  [Currency.EUR]: '€'
}
