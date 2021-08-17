type LinkProps = {
  width?: number
  height?: number
  stroke?: string
}

export const Link = ({
  width = 24,
  height = 24,
  stroke = 'currentcolor'
}: LinkProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={stroke}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M704 230h180c6.6 0 12-5.4 12-12 0-16.4-7.4-32-20-42.6l-154.2-128.4c-9.8-8.2-28.4-14.8-41.2-14.8-8.2 0-14.8 6.6-14.8 14.8V192c0.2 21 17.2 38 38.2 38z" />
      <path d="M614 192V32H352c-35.2 0-64 28.8-64 64v672c0 35.2 28.8 64 64 64h480c35.2 0 64-28.8 64-64V282h-192c-49.6 0-90-40.4-90-90z" />
      <path d="M232 824V160H192c-35.2 0-64 28.8-64 64v704c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-40H296c-35.2 0-64-28.8-64-64z" />
    </svg>
  )
}
