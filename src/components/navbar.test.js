import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import Navbar from './navbar'

describe('navbar component', () => {
  const { container, getByText } = render(<Navbar title='University List App' />)
  const menu = container.querySelectorAll('li')
  test('renders navbar component', () => {
    expect(getByText('University List App')).toBeInTheDocument()
    expect(getByText('Home')).toBeInTheDocument()
    expect(getByText('Newsletter')).toBeInTheDocument()
    expect(getByText('Setting')).toBeInTheDocument()
  })
  test('navbar should have at least 3 menu', () => {
    expect(menu.length).toBe(3)
  })
})
