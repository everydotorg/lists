import {
  Divider as ThemeDivider,
  DividerProps as ThemeDividerProps
} from 'theme-ui'

type DividerProps = { space: number; inverted?: boolean } & ThemeDividerProps
export const Divider = ({
  sx,
  space,
  inverted,
  ...props
}: DividerProps): JSX.Element => {
  return (
    <ThemeDivider
      sx={{
        color: inverted ? 'dividerInverted' : 'divider',
        my: space,
        ...sx
      }}
      {...props}
    />
  )
}
