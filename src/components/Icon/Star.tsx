type StarProps = {
  fill: 'currentcolor' | 'none'
}

export const Star = ({ fill = 'currentcolor' }: StarProps) => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.89653 1L12.4319 6.008L18.1017 6.816L13.9991 10.712L14.9673 16.216L9.89653 13.616L4.82577 16.216L5.79397 10.712L1.69141 6.816L7.36115 6.008L9.89653 1Z"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
