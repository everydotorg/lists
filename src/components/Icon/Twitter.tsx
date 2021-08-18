import { Link, LinkProps } from '@theme-ui/components'

type TwitterProps = {
  width: number
  height: number
} & LinkProps

export const Twitter = ({
  width,
  height,
  href,
  sx,
  ...props
}: TwitterProps): JSX.Element => {
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
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 2.1238C21.1764 2.49159 20.3493 2.76923 19.4326 2.86298C20.3493 2.30769 21.0833 1.38462 21.4486 0.367789C20.5319 0.923077 19.6152 1.29087 18.6091 1.47837C17.6924 0.555289 16.5 0 15.2181 0C12.7402 0 10.7243 2.03005 10.7243 4.52164C10.7243 4.89303 10.7243 5.26082 10.8174 5.53846C7.05762 5.35457 3.75977 3.59856 1.55762 0.829327C1.09928 1.47837 0.916667 2.30769 0.916667 3.13702C0.916667 4.70914 1.74023 6.09375 2.93262 6.92308C2.19857 6.82933 1.4681 6.64543 0.916667 6.36779C0.916667 6.36779 0.916667 6.36779 0.916667 6.46154C0.916667 8.67548 2.47428 10.5216 4.49023 10.893C4.125 10.9832 3.75977 11.0769 3.30143 11.0769C3.02572 11.0769 2.75 11.0769 2.47428 10.9832C3.02572 12.8293 4.67643 14.1238 6.69238 14.1238C5.13477 15.3245 3.20833 16.0601 1.09928 16.0601C0.734049 16.0601 0.365235 16.0601 0 15.97C2.01595 17.2608 4.40072 18 6.875 18C15.2181 18 19.7083 11.0769 19.7083 5.07692C19.7083 4.89303 19.7083 4.70914 19.7083 4.52164C20.625 3.8762 21.359 3.04687 22 2.1238Z"
          fill="currentcolor"
        />
      </svg>
    </Link>
  )
}