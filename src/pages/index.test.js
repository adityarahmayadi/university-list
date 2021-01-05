import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Index from './index'

test('renders sample component', () => {
  render(<Index />)
  const sampleElement = screen.getByText(/Hello/i)
  expect(sampleElement).toBeInTheDocument()
})
