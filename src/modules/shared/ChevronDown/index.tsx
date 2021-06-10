import { Box, BoxProps } from '@theme-ui/components'

export type ChevronDownProps = {
  width: number
  height: number
  inverted?: boolean
} & BoxProps

export const ChevronDown = ({
  width,
  height,
  inverted,
  sx,
  ...props
}: ChevronDownProps): JSX.Element => {
  return (
    <Box sx={{ cursor: 'pointer', ...sx }} {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L7 7L13 1"
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  )
}
