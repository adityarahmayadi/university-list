import '@testing-library/jest-dom/extend-expect'
import { getRandomImage } from './helpers'

describe('helper function', () => {
  test('getRandomImage function', () => {
    const image = getRandomImage()
    expect(image).toBeDefined()
  })
})
