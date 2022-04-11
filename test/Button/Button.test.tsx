import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContainedButton as Button } from '../../src';

const text = 'Click Me!';

describe('<Button />', () => {
  describe('click', () => {
    test('renders addOns component', () => {
      render(<Button>{text}</Button>);
      expect(screen.getByText('Click Me!')).toBeInTheDocument();
    });
  });
});
