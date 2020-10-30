import React from 'react'
import Header from '../Header'
import { render } from '@testing-library/react'

test('renders the correct content', () => {
  const { getByText } = render(<Header />);

  getByText("TRIVIA")

})