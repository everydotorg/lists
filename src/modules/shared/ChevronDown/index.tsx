import { Box, BoxProps } from '@theme-ui/components'
import { useCampaignInfoContext } from '../../../hooks/useCampaignInfoContext'

type ChevronDownProps = { inverted?: boolean } & BoxProps

export const ChevronDown = ({
  sx,
  inverted,
  ...props
}: ChevronDownProps): JSX.Element => {
  const { primaryColor } = useCampaignInfoContext()

  const strokeColor = inverted ? 'white' : primaryColor

  return (
    <Box sx={{ cursor: 'pointer', ...sx }} {...props}>
      <svg
        width="20"
        height="10"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L7 7L13 1"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  )
}
