import { Link, LinkProps } from '@theme-ui/components'

type FacebookProps = {
  width: number
  height: number
} & LinkProps

export const Facebook = ({
  width,
  height,
  href,
  sx,
  ...props
}: FacebookProps): JSX.Element => {
  return (
    <Link
      href={href}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        ...sx
      }}
      {...props}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0C4.477 0 0 4.50018 0 10.0518C0 15.0907 3.693 19.2521 8.505 19.9789V12.7155H6.031V10.0729H8.505V8.31482C8.505 5.40383 9.916 4.12625 12.323 4.12625C13.476 4.12625 14.085 4.21169 14.374 4.25089V6.55677H12.732C11.71 6.55677 11.353 7.53078 11.353 8.62844V10.0729H14.348L13.942 12.7155H11.354V20C16.235 19.3356 20 15.14 20 10.0518C20 4.50018 15.523 0 10 0Z"
          fill="currentcolor"
        />
      </svg>
    </Link>
  )
}
