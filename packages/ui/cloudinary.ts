import { ImageLoaderProps } from 'next/legacy/image'

const normalizeSrc = (src: string) => (src[0] === '/' ? src.slice(1) : src)

export function cloudinaryFetchLoader({ src, width, quality }: ImageLoaderProps) {
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')]
  return `https://cdn.sushi.com/image/fetch/${params.join(',')}/${normalizeSrc(src)}`
}

export function cloudinaryImageLoader({ src, width, quality }: ImageLoaderProps) {
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')]
  return `https://cdn.sushi.com/image/upload/${params.join(',')}/${normalizeSrc(src)}`
}

// from next/legacy/image
// function cloudinaryLoader({
//   config,
//   src,
//   width,
//   quality,
// }: ImageLoaderPropsWithConfig): string {
//   // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
//   const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')]
//   const paramsString = params.join(',') + '/'
//   return `${config.path}${paramsString}${normalizeSrc(src)}`
// }
