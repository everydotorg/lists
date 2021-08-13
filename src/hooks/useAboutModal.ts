import { useContext } from 'react'
import { AboutModalContext } from 'src/contexts/AboutModalContext'

export const useAboutModal = () => useContext(AboutModalContext)
