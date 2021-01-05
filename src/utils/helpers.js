import { images } from '@xendit/data'

export const getRandomImage = () => images[Math.floor(Math.random() * 4) + 1].url
