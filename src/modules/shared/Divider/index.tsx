import {
  Divider as ThemeDivider,
  DividerProps as ThemeDividerProps
} from 'theme-ui'

type DividerProps = {
  space: number | number[]
  inverted?: boolean
  color?: string
} & ThemeDividerProps
export const Divider = ({
  sx,
  space,
  inverted = false,
  color = '',
  ...props
}: DividerProps): JSX.Element => {
  return (
    <ThemeDivider
      sx={{
        color: getDividerColor(color, inverted),
        my: space,
        ...sx
      }}
      {...props}
    />
  )
}

const getDividerColor = (color: string, inverted: boolean): string => {
  if (color) {
    return color
  }

  if (inverted) {
    return 'dividerInverted'
  }

  return 'divider'
}
