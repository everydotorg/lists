enum StateName {
  AL = 'Alabama',
  AK = 'Alaska',
  AS = 'American Samoa',
  AZ = 'Arizona',
  AR = 'Arkansas',
  CA = 'California',
  CO = 'Colorado',
  CT = 'Connecticut',
  DE = 'Delaware',
  DC = 'District Of Columbia',
  FM = 'Federated States Of Micronesia',
  FL = 'Florida',
  GA = 'Georgia',
  GU = 'Guam',
  HI = 'Hawaii',
  ID = 'Idaho',
  IL = 'Illinois',
  IN = 'Indiana',
  IA = 'Iowa',
  KS = 'Kansas',
  KY = 'Kentucky',
  LA = 'Louisiana',
  ME = 'Maine',
  MH = 'Marshall Islands',
  MD = 'Maryland',
  MA = 'Massachusetts',
  MI = 'Michigan',
  MN = 'Minnesota',
  MS = 'Mississippi',
  MO = 'Missouri',
  MT = 'Montana',
  NE = 'Nebraska',
  NV = 'Nevada',
  NH = 'New Hampshire',
  NJ = 'New Jersey',
  NM = 'New Mexico',
  NY = 'New York',
  NC = 'North Carolina',
  ND = 'North Dakota',
  MP = 'Northern Mariana Islands',
  OH = 'Ohio',
  OK = 'Oklahoma',
  OR = 'Oregon',
  PW = 'Palau',
  PA = 'Pennsylvania',
  PR = 'Puerto Rico',
  RI = 'Rhode Island',
  SC = 'South Carolina',
  SD = 'South Dakota',
  TN = 'Tennessee',
  TX = 'Texas',
  UT = 'Utah',
  VT = 'Vermont',
  VI = 'Virgin Islands',
  VA = 'Virginia',
  WA = 'Washington',
  WV = 'West Virginia',
  WI = 'Wisconsin',
  WY = 'Wyoming'
}

const STATE_NAME_TO_ABBREVIATION = Object.fromEntries(
  Object.entries(StateName).map((entry) => entry.reverse())
)

/**
 * regex matching strings that follow a 'City Name, State Name' pattern.
 *
 * $1 should match city, and $2 should match the  state. If you change this,
 * ensure the data extraction below still works
 */
const CITY_STATE_REGEX = new RegExp(
  `^([ )(.a-zA-Z-]+),+ *(${Object.entries(StateName)
    .flat()
    .join('|')})($|[^a-zA-Z])`
)
const COUNTRY_NAME_REGEX = /^[a-z &]+/i
const MAX_COUNTRY_NAME_LENGTH = 22

function titleize(str: string) {
  return str.toLowerCase().replace(/(?:^|\s|-)\S/g, (x) => x.toUpperCase())
}

/**
 * Converts a nonprofit's locationAddress string from our Nonprofit datasets to
 * a consistent, human-readable form
 *
 * Heuristics decided and justified here:
 * https://github.com/everydotorg/every.org/issues/1534
 */
export function displayLocation(locStr: string): string {
  const cityStateMatch = locStr.match(CITY_STATE_REGEX)
  if (cityStateMatch) {
    const { 1: city, 2: state } = cityStateMatch
    const result = [
      titleize((city || '').trim()),
      STATE_NAME_TO_ABBREVIATION[state] ?? state
    ]
      .filter((x): x is string => !!x)
      .join(', ')
    if (result) {
      return result
    }
  }

  if (locStr.match(COUNTRY_NAME_REGEX)) {
    const result = titleize(locStr.trim())
    if (result && result.length < MAX_COUNTRY_NAME_LENGTH) {
      return result
    }
  }
  return locStr
}
