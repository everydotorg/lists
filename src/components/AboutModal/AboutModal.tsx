import { useState } from 'react'
import ReactDOM from 'react-dom'
import { About } from './About'
import { Flex, Box } from 'theme-ui'
import { Brand } from '../Brand'
import { Navbar, Section } from './Navbar'
import { styles } from './aboutModalStyles'
import { useTransition, animated, config, SpringValue } from 'react-spring'
import cubicBezier from 'bezier-easing'
import { useAboutModal } from 'src/hooks/useAboutModal'

interface AboutModalProps {
  contentAnimationProps: Record<string, SpringValue<string>>
}
export const AboutModal = ({ contentAnimationProps }: AboutModalProps) => {
  const [section] = useState<Section>('about')
  const { open, setOpen } = useAboutModal()
  const backdropTransition = useTransition(open, {
    from: { backdropFilter: 'blur(0px)', backgroundColor: 'transparent' },
    enter: {
      backdropFilter: 'blur(8px)',
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    leave: { backdropFilter: 'blur(0px)', backgroundColor: 'transparent' },
    config: {
      ...config.default,
      duration: 250,
      easing: cubicBezier(0.55, 0.08, 0, 1)
    }
  })

  const AnimatedFlex = animated(Flex)

  return ReactDOM.createPortal(
    backdropTransition(
      (backdropProps, show) =>
        show && (
          <AnimatedFlex style={backdropProps} sx={styles.modalContainer}>
            <Box sx={styles.modalBlur} onClick={() => setOpen(false)}></Box>
            <AnimatedFlex
              style={contentAnimationProps}
              sx={styles.modalContent}
            >
              <Navbar selected={section} />
              <Box sx={styles.contentSection}>
                {section === 'about' && <About />}
              </Box>
              <Brand />
            </AnimatedFlex>
          </AnimatedFlex>
        )
    ),
    document.getElementById('about-modal') as HTMLElement
  )
}
