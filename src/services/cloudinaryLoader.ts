import { ImageLoaderProps } from 'next/image'

// Just like next/image cloudinaryLoader
// but can handle multiple cloudinary accounts
// takes a src like p22/image/upload/image or everydotorg/image/upload/image

export const cloudinaryLoader = ({
  src,
  width,
  quality
}: ImageLoaderProps): string => {
  const [account, image] = src.split('/image/upload/')
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')]
  const segments = [
    'https://res.cloudinary.com',
    account,
    'image/upload',
    params.join(','),
    image
  ]
  return segments.join('/')
}
