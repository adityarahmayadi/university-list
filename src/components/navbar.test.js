import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from './navbar'

describe('navbar component', () => {
  test('renders navbar component', () => {
    render(<Navbar />)

    expect(screen.getByText('University List App')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Setting')).toBeInTheDocument()
  })
})
