import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import Card from './card'

describe('card component', () => {
  test('renders card component', () => {
    const { getByText } = render(
      <Card
        name='Telkom University'
        country='Indonesia'
        website='https://telkomuniversity.ac.id/'
        code='ID'
      />,
    )

    expect(getByText('Telkom University')).toBeInTheDocument()
    expect(getByText('Indonesia')).toBeInTheDocument()
    expect(getByText('https://telkomuniversity.ac.id/')).toBeInTheDocument()
    expect(getByText('ID')).toBeInTheDocument()
  })
})
