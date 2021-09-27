import { Link, LinkProps } from '@theme-ui/components'

type EnvelopeProps = {
  width: number
  height: number
} & LinkProps

export const Envelope = ({
  width,
  height,
  href,
  sx,
  ...props
}: EnvelopeProps) => {
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
        stroke="currentcolor"
        fill="none"
        height="24"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    </Link>
  )
}
