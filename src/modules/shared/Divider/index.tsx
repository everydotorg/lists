import {
  Divider as ThemeDivider,
  DividerProps as ThemeDividerProps
} from 'theme-ui'

type DividerProps = { space: number } & ThemeDividerProps
export const Divider = ({ sx, space, ...props }: DividerProps): JSX.Element => {
  return (
    <ThemeDivider
      sx={{
        color: 'divider',
        my: space,
        ...sx
      }}
      {...props}
    />
  )
}
