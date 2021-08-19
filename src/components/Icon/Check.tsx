type CheckProps = {
  width?: number
  height?: number
}
export const Check = ({ width = 17, height = 12 }: CheckProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 1L5.85915 11L1 6.20833"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
