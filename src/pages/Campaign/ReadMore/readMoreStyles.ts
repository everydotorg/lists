import { ThemeUIStyleObject } from '@theme-ui/css'

export const styles = {
  expandable: function (
    overflows: boolean,
    expanded: boolean,
    clamp: number
  ): ThemeUIStyleObject {
    if (!overflows) {
      return {
        display: 'block'
      }
    }

    return {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: expanded ? 'unset' : clamp,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'normal'
    }
  }
}
