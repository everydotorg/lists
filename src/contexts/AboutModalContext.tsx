import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { AboutModal } from 'src/components/AboutModal'
import { useTransition, config } from 'react-spring'
import cubicBezier from 'bezier-easing'

type AboutModal = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const AboutModalContext = createContext<AboutModal>({} as AboutModal)

export const AboutModalProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    open
      ? document.body.classList.add('modal')
      : document.body.classList.remove('modal')
  }, [open])

  const transition = useTransition(open, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(100%)' },
    expires: true,
    config: {
      ...config.default,
      duration: 250,
      easing: cubicBezier(0.55, 0.08, 0, 1)
    }
  })

  return (
    <AboutModalContext.Provider value={{ open, setOpen }}>
      {transition(
        (style, show) => show && <AboutModal contentAnimationProps={style} />
      )}
      {children}
    </AboutModalContext.Provider>
  )
}
