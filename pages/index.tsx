import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Redirect = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/lilbub')
  })

  return null
}

export default Redirect
