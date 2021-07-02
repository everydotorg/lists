import { SponsoringType } from './SponsoringType'

export interface Sponsor {
  name: string
  type: SponsoringType
  ratio: string
  threshold: number
  description: string
}
