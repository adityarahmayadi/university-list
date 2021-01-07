import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import Navbar from './navbar'

describe('navbar component', () => {
  const menus = [
    {
      name: 'Home',
      url: '/home',
    },
    {
      name: 'Newsletter',
      url: '/newsletter',
    },
    {
      name: 'Settings',
      url: '/settings',
    },
  ]
  const { container, getByText } = render(<Navbar title='University List App' menus={menus} />)
  const menu = container.querySelectorAll('li')
  test('renders navbar component', () => {
    expect(getByText('University List App')).toBeInTheDocument()
    expect(getByText('Home')).toBeInTheDocument()
    expect(getByText('Newsletter')).toBeInTheDocument()
    expect(getByText('Settings')).toBeInTheDocument()
  })
  test('navbar should have at least 3 menu', () => {
    expect(menu.length).toBe(menus.length)
  })
})
